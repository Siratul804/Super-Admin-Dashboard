"use server";
import { query } from "./db";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "@/app/auth";
import path from "path";
import { writeFile } from "fs/promises";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { revalidatePath } from "next/cache";
import { signOut } from "@/app/auth";
// .......................
//testing

export const test = async (checkedItems, username, description) => {
  // console.log(checkedItems);

  console.log(username, description);

  try {
    const valuesToInsert = checkedItems.map((item) => [
      item.id,
      item.name,
      item.role_id,
    ]);

    console.log(valuesToInsert);

    const newPermission = await Promise.all(
      valuesToInsert.map((values) =>
        query({
          query:
            "INSERT INTO test (`permission_id`, `permission_name`, `role_id`) VALUES (?, ?, ?)",
          values,
        })
      )
    );

    console.log(newPermission);
  } catch (err) {
    console.log(err);
    return {
      message: "error",
    };
  }

  return {
    message: "success",
  };
};

//testing
// .......................

//user
export const addUser = async (prevState, formData) => {
  const { name, email, password, number, type, status, role } =
    Object.fromEntries(formData);

  // console.log(name, email, password, number, type, status, role);

  const role_id = Number(role);

  console.log(role_id);

  try {
    const hasedPassword = await bcrypt.hash(password, 10);

    const image = "img.png";

    const newUser = await query({
      query:
        "INSERT INTO users (name, email, password, number, img, type, status, role_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      values: [
        name,
        email,
        hasedPassword,
        number,
        image,
        type,
        status,
        role_id,
      ],
    });

    console.log(newUser);
  } catch (err) {
    if (err) {
      console.log(err);
      return {
        message: "Already Exits",
      };
    }
  }

  revalidatePath("/dashboard/grit/edit");
  return {
    message: "User Added",
  };
};
export const updateUser = async (prevState, formData) => {
  const { id, name, email, number, type, status, role } =
    Object.fromEntries(formData);

  console.log(name, email, number, type, status, role);

  const role_id = Number(role);

  console.log(role_id);

  try {
    const newUser = await query({
      query:
        "UPDATE users SET  name = ?, email = ?, number = ?, type = ?, status = ?, role_id = ? WHERE id = ?",
      values: [name, email, number, type, status, role_id, id],
    });

    console.log(newUser);
  } catch (err) {
    console.log(err);
    return {
      message: "Failed",
    };
  }

  revalidatePath("/dashboard/grit/edit");
  return {
    message: "Updated",
  };
};

export const changePass = async (prevState, formData) => {
  const { id, password, previous } = Object.fromEntries(formData);

  console.log(previous);

  try {
    if (previous !== password) {
      return {
        message: "Did't Match",
      };
    }

    const hasedPassword = await bcrypt.hash(password, 10);

    const newPass = await query({
      query: "UPDATE users SET password = ? WHERE id = ?",
      values: [hasedPassword, id],
    });

    console.log(newPass);
  } catch (err) {
    console.log(err);
    return {
      message: "Failed",
    };
  }

  revalidatePath("/dashboard/grit/profile");
  return {
    message: "Updated",
  };
};

//global
export const authenticate = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    if (error.message.includes("CredentialsSignin")) {
      return "CredentialsSignin";
    }
    throw error;
  }
};
export const logout_user = async () => {
  await signOut();
};

// img
export const addImg = async (prevState, formData) => {
  const { id, file } = Object.fromEntries(formData);

  try {
    const FILE_SIZE = 1000000; // 1MB

    if (file.size > FILE_SIZE) {
      return {
        message: "File Did't Match",
      };
      // return "File size is large! (image has to be less then 1MB) ";
    }

    console.log(file, id);

    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = Date.now() + file.name.replaceAll(" ", "_");
    console.log(filename);

    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );

    const newImg = await query({
      query: "UPDATE users SET img = ? WHERE id = ?",
      values: [filename, id],
    });

    console.log(newImg);
  } catch (err) {
    console.log(err);
    return {
      message: "Failed",
    };
  }

  revalidatePath("/dashboard/grit/profile");
  return {
    message: "Uploaded",
  };
};

// gym
export const addMember = async (prevState, formData) => {
  const { name, email, number, file, status, userID } =
    Object.fromEntries(formData);

  console.log(file);

  const user = await query({
    query: "SELECT email FROM members WHERE email = (?)",
    values: [email],
  });

  if (user[0]) {
    return "Member Already Exits";
  }

  const FILE_SIZE = 1000000; // 1MB

  if (file.size > FILE_SIZE) {
    return "File size is large! (image has to be less then 1MB) ";
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  console.log(filename);

  await writeFile(
    path.join(process.cwd(), "public/uploads/" + filename),
    buffer
  );

  const newMember = await query({
    query:
      "INSERT INTO members (name, email, number, img, status, userID) VALUES (?, ?, ?, ?, ?, ?)",
    values: [name, email, number, filename, status, userID],
  });

  if (newMember) {
    console.log("Member Added");
    redirect("/dashboard/gym/edit");
  }
  if (!newMember) {
    return "Member Added Failed";
  }
};

export const updateMember = async (formData) => {
  const { id, name, email, number, status } = Object.fromEntries(formData);

  const newMember = await query({
    query:
      "UPDATE members SET  name = ?, email = ?, number = ?, status = ? WHERE id = ?",
    values: [name, email, number, status, id],
  });

  if (!newMember) {
    throw new Error("Faile to update Member");
  }
  if (newMember) {
    console.log("Member updated");
    redirect("/dashboard/gym/edit");
  }
};

export const deleteMember = async (formData) => {
  const { id } = Object.fromEntries(formData);

  const deleteMember = await query({
    query: "DELETE FROM members WHERE id = (?)",
    values: [id],
  });

  if (deleteMember) {
    console.log("user deleted");
    redirect("/dashboard/gym/edit");
  }
};

export const updateImg = async (prevState, formData) => {
  const { id, file } = Object.fromEntries(formData);

  const FILE_SIZE = 1000000; // 1MB

  if (file.size > FILE_SIZE) {
    return "File size is large! (image has to be less then 1MB)";
  }

  console.log(file, id);

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = Date.now() + file.name.replaceAll(" ", "_");
  console.log(filename);

  await writeFile(
    path.join(process.cwd(), "public/uploads/" + filename),
    buffer
  );

  const newImg = await query({
    query: "UPDATE members SET img = ? WHERE id = ?",
    values: [filename, id],
  });

  if (newImg) {
    console.log("Image Update");
    redirect("/dashboard/gym/edit");
  }
  if (!newImg) {
    return "Image update Failed ";
  }
};

// Forgot Pass
export const forgotPass = async (prevState, formData) => {
  const { email } = Object.fromEntries(formData);
  try {
    const user = await query({
      query: "SELECT * FROM users WHERE email = ?",
      values: [email],
    });

    console.log(user[0].email);

    const token = jwt.sign({ id: user._id }, "jwt_secret_key", {
      expiresIn: "1d",
    });

    console.log(token);

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "oddity661@gmail.com",
        pass: "gbnk wpnz adeq wilk",
      },
    });

    var mailOptions = {
      from: user[0].email,
      to: "islamsiratul@gmail.com",
      subject: "Reset your password",
      text: `${process.env.NEXT_PUBLIC_API_URL}/reset-password/${user[0].id}/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    return "Url send to your mail !";
  } catch (err) {
    return "Invalid Email !";
  }
};
// Reset Pass
export const resettPass = async (prevState, formData) => {
  const { id, token, password } = Object.fromEntries(formData);

  console.log(id, token, password);

  const jwtVerify = jwt.verify(token, "jwt_secret_key");

  if (!jwtVerify) {
    return "Invalid Token";
  }
  const hasedPassword = await bcrypt.hash(password, 10);
  const updateNewPass = await query({
    query: "UPDATE users SET password = ? WHERE id = ?",
    values: [hasedPassword, id],
  });

  if (!updateNewPass) {
    return "Password Chnaged Failed";
  }

  if (updateNewPass) {
    return "Your password has been changed !";
  }
};

// Permission

export const addRole = async (checkedItems, username, description, status) => {
  console.log(username, description, status);
  console.log(checkedItems);
  try {
    const newRole = await query({
      query: "INSERT INTO role (name, description, status) VALUES (?, ?, ?)",
      values: [username, description, status],
    });
    console.log(newRole);

    const role_id = await query({
      query: "SELECT id FROM role ORDER BY id DESC LIMIT 1",
      values: [],
    });
    // const role_num = Number(role_id);
    const role_id_num = role_id[0].id;
    console.log(role_id_num);
    //
    const valuesToInsert = checkedItems.map((item) => [item.id, role_id_num]);
    console.log(valuesToInsert);
    const newPermission = await Promise.all(
      valuesToInsert.map((values) =>
        query({
          query:
            "INSERT INTO role_permission (`permission_id`, `role_id`) VALUES (?, ?)",
          values,
        })
      )
    );
    console.log(newPermission);
    if (newPermission) {
      return {
        message: "role Added",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      message: "role error",
    };
  }

  revalidatePath("/dashboard/grit/roleList");
  redirect("/dashboard/grit/roleList");
};

export const updateRole = async (
  checkedItems,
  username,
  description,
  status,
  id
) => {
  console.log(username, description, status, id);
  console.log(checkedItems);

  try {
    // Delete existing permissions for the role
    const deletePermission = await query({
      query: "DELETE FROM role_permission WHERE role_id = ?",
      values: [id],
    });
    console.log(deletePermission);

    //update role
    const updateRole = await query({
      query:
        "UPDATE role SET name = ?, description = ?, status = ?  WHERE id = ?",
      values: [username, description, status, id],
    });

    console.log(updateRole);

    if (checkedItems.length > 0) {
      // Insert new permissions only if there are items to insert
      const valuesToInsert = checkedItems.map((item) => [item.id, id]);
      console.log(valuesToInsert);

      const newPermission = await Promise.all(
        valuesToInsert.map((values) =>
          query({
            query:
              "INSERT INTO role_permission (`permission_id`, `role_id`) VALUES (?, ?)",
            values,
          })
        )
      );
      console.log(newPermission);
    }

    revalidatePath("/dashboard/grit/roleList");

    return {
      message: "Role updated",
    };
  } catch (error) {
    console.error(error);
    return {
      message: "Role error",
    };
  }
};

// Gym
export const addGym = async (prevState, formData) => {
  const { name, address, email, number, logo, status, website } =
    Object.fromEntries(formData);

  console.log(name, address, email, number, logo, status, website);

  try {
    const FILE_SIZE = 1000000; // 1MB

    if (logo.size > FILE_SIZE) {
      return {
        message: "File Did't Match",
      };
      // return "File size is large! (image has to be less then 1MB) ";
    }

    const buffer = Buffer.from(await logo.arrayBuffer());
    const filename = Date.now() + logo.name.replaceAll(" ", "_");
    console.log(filename);

    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );

    const currentDate = new Date().toISOString().split("T")[0];

    console.log(currentDate);

    const newGym = await query({
      query:
        "INSERT INTO list_gym (name, address, email, phone, logo, status, RegisteredSince, website) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      values: [
        name,
        address,
        email,
        number,
        filename,
        status,
        currentDate,
        website,
      ],
    });

    console.log(newGym);
  } catch (err) {
    if (err) {
      console.log(err);
      return {
        message: "Gym Added Failed",
      };
    }
  }

  revalidatePath("/dashboard/grit/listOfGym");
  return {
    message: "Gym Added",
  };
};

export const updateGym = async (prevState, formData) => {
  const {
    id,
    name,
    address,
    email,
    number,
    logo,
    status,
    website,
    RegisteredSince,
  } = Object.fromEntries(formData);

  console.log(
    id,
    name,
    address,
    email,
    number,
    logo,
    status,
    website,
    RegisteredSince
  );

  try {
    const FILE_SIZE = 1000000; // 1MB

    if (logo.size > FILE_SIZE) {
      return {
        message: "File Did't Match",
      };
      // return "File size is large! (image has to be less then 1MB) ";
    }

    console.log(logo, id);

    const buffer = Buffer.from(await logo.arrayBuffer());
    const filename = Date.now() + logo.name.replaceAll(" ", "_");
    console.log(filename);

    await writeFile(
      path.join(process.cwd(), "public/uploads/" + filename),
      buffer
    );

    const newGym = await query({
      query:
        "UPDATE list_gym SET  name = ?,address = ?, phone = ?,email = ?,logo = ?,status = ?,RegisteredSince = ?,website = ? WHERE id = ?",
      values: [
        name,
        address,
        number,
        email,
        logo,
        status,
        RegisteredSince,
        website,
        id,
      ],
    });

    console.log(newGym);
  } catch (err) {
    console.log(err);
    return {
      message: "Failed",
    };
  }

  revalidatePath("/dashboard/grit/listOfGym");
  return {
    message: "Updated",
  };
};
