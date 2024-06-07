"use server";
import { query } from "./db";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "@/app/auth";
import path from "path";
import { writeFile } from "fs/promises";
import fs from "fs/promises";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { revalidatePath } from "next/cache";
import { signOut } from "@/app/auth";
import generateInvoices from "./cronJobs";
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
  const { name, email, password, number, type, status, role, gym_id } =
    Object.fromEntries(formData);

  // console.log(name, email, password, number, type, status, role);

  const role_id = Number(role);

  console.log(role_id);

  try {
    const hasedPassword = await bcrypt.hash(password, 10);

    const image = "img.png";

    const newUser = await query({
      query:
        "INSERT INTO users (name, email, password, number, img, type, status, role_id, gym_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      values: [
        name,
        email,
        hasedPassword,
        number,
        image,
        type,
        status,
        role_id,
        gym_id,
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

export const addRole = async (
  checkedItems,
  username,
  description,
  status,
  type,
  gym_id
) => {
  console.log(username, description, status, type, gym_id);
  console.log(checkedItems);
  try {
    const newRole = await query({
      query:
        "INSERT INTO role (name, description, status, type, gym_id) VALUES (?, ?, ?, ?, ?)",
      values: [username, description, status, type, gym_id],
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

  revalidatePath("/dashboard");
  redirect("/dashboard");
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
    prev_logo,
  } = Object.fromEntries(formData);

  console.log(prev_logo);

  try {
    const FILE_SIZE = 1000000; // 1MB

    if (logo && logo.size > FILE_SIZE) {
      return {
        message: "File Did't Match",
      };
    }

    let filename = prev_logo; // Use the existing logo filename by default

    console.log(logo.name);

    if (logo.name !== "undefined") {
      // If a new image is provided, update the filename
      const buffer = Buffer.from(await logo.arrayBuffer());
      filename = Date.now() + logo.name.replaceAll(" ", "_");
      await writeFile(
        path.join(process.cwd(), "public/uploads/" + filename),
        buffer
      );
    }

    await query({
      query:
        "UPDATE list_gym SET  name = ?, address = ?, phone = ?, email = ?, logo = ?, status = ?, RegisteredSince = ?, website = ? WHERE id = ?",
      values: [
        name,
        address,
        number,
        email,
        filename,
        status,
        RegisteredSince,
        website,
        id,
      ],
    });
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

// gym package

export const addPackage = async (prevState, formData) => {
  const { Name, Description, Price, DurationValue, DurationUnit, gym_id } =
    Object.fromEntries(formData);

  const CreateDate = new Date().toISOString().split("T")[0];

  console.log(
    Name,
    Description,
    Price,
    DurationValue,
    DurationUnit,
    CreateDate,
    gym_id
  );

  try {
    const newPackage = await query({
      query:
        "INSERT INTO Package (Name, Description, Price, DurationValue, DurationUnit, CreateDate, gym_id) VALUES (?, ?, ?, ?, ?, ?, ?)",
      values: [
        Name,
        Description,
        Price,
        DurationValue,
        DurationUnit,
        CreateDate,
        gym_id,
      ],
    });

    console.log(newPackage);
  } catch (err) {
    if (err) {
      console.log(err);
      return {
        message: "Already Exits",
      };
    }
  }

  revalidatePath("/dashboard/gym/package");
  return {
    message: "Added",
  };
};
export const updatePackage = async (prevState, formData) => {
  const { id, Name, Description, Price, DurationValue, DurationUnit } =
    Object.fromEntries(formData);

  const LastUpdateDate = new Date().toISOString().split("T")[0];

  console.log(
    id,
    Name,
    Description,
    Price,
    DurationValue,
    DurationUnit,
    LastUpdateDate
  );

  try {
    const newPackage = await query({
      query:
        "UPDATE Package SET  Name = ?, Description = ?, Price = ?, DurationValue = ?, DurationUnit = ?, LastUpdateDate = ?  WHERE PackageID = ?",
      values: [
        Name,
        Description,
        Price,
        DurationValue,
        DurationUnit,
        LastUpdateDate,
        id,
      ],
    });

    console.log(newPackage);
  } catch (err) {
    console.log(err);
    return {
      message: "Failed",
    };
  }

  revalidatePath("/dashboard/gym/package");
  return {
    message: "Updated",
  };
};

//member

export const addMember = async (prevState, formData) => {
  const { package_id, name, cell_number, gender, blood_group, gym_id } =
    Object.fromEntries(formData);

  console.log(package_id, name, cell_number, gender, blood_group, gym_id);

  const memberData = await query({
    query:
      "SELECT member_id FROM members WHERE gym_id = ? ORDER BY member_id DESC LIMIT 1",
    values: [gym_id],
  });

  let nextMemberId;
  if (memberData.length > 0) {
    const lastMemberId = memberData[0].member_id;
    const numericPart = lastMemberId.split("-")[1]; // Assuming the format is 'M-XX'
    const nextNumericPart = parseInt(numericPart) + 1;
    nextMemberId =
      "M-" + nextNumericPart.toString().padStart(numericPart.length, "0"); // Formatting back to original format
    console.log("Next member ID:", nextMemberId);
  } else {
    nextMemberId = "M-01"; // If no member found, insert M-01
    console.log("Next member ID:", nextMemberId);
  }

  const RegDate = new Date().toISOString().split("T")[0];

  try {
    const newMember = await query({
      query:
        "INSERT INTO members (package_id, member_id, name, cell_number, gender, blood_group, reg_date, start_date, gym_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      values: [
        package_id,
        nextMemberId,
        name,
        cell_number,
        gender,
        blood_group,
        RegDate,
        RegDate,
        gym_id,
      ],
    });

    console.log("New member inserted:", newMember);
  } catch (err) {
    console.log("Error inserting new member:", err);
    return {
      message: "Already Exists",
    };
  }

  try {
    const lastMemberId = await query({
      query:
        "SELECT Id FROM members WHERE gym_id = ? ORDER BY member_id DESC LIMIT 1",
      values: [gym_id],
    });

    console.log(lastMemberId[0].Id);

    const package_price = await query({
      query: "SELECT Price FROM Package WHERE PackageID = ?",
      values: [package_id],
    });

    console.log(package_price[0].Price);

    const m_invoice = await query({
      query:
        "INSERT INTO m_invoice (member_id, invoice_amount, invoice_due_amount, created_date, m_id) VALUES (?,?,?,?,?)",
      values: [
        nextMemberId,
        package_price[0].Price,
        package_price[0].Price,
        RegDate,
        lastMemberId[0].Id,
      ],
    });

    console.log("New m_invoice:", m_invoice);

    // Pass necessary data to the generateInvoices function
    await generateInvoices(nextMemberId, package_price, lastMemberId);
  } catch (err) {
    console.log("Error inserting new m_invoice:", err);
    return {
      message: "Already Exists",
    };
  }

  revalidatePath("/dashboard/gym/member");
  return {
    message: "Added",
  };
};

export const updateMember = async (prevState, formData) => {
  const {
    id,
    name,
    email,
    cell_number,
    gender,
    country,
    blood_group,
    national_id,
    height,
    weight,
    date_time,
  } = Object.fromEntries(formData);

  console.log(
    id,
    name,
    email,
    cell_number,
    gender,
    country,
    blood_group,
    national_id,
    height,
    weight,
    date_time
  );

  const LastUpdateDate = new Date().toISOString().split("T")[0];

  try {
    const newMember = await query({
      query:
        "UPDATE members SET name = ?, email = ?, cell_number = ?, gender = ?, country = ?, blood_group = ?, national_id = ?, date_time = ?, weight = ?, height = ?, last_update = ?  WHERE Id = ?",
      values: [
        name,
        email,
        cell_number,
        gender,
        country,
        blood_group,
        national_id,
        date_time,
        weight,
        height,
        LastUpdateDate,
        id,
      ],
    });

    console.log(newMember);
  } catch (err) {
    console.log(err);
    return {
      message: "Failed",
    };
  }

  revalidatePath("/dashboard/gym/member");
  return {
    message: "Updated",
  };
};
export const addMemberPhoto = async (prevState, formData) => {
  const { id, photo } = Object.fromEntries(formData);

  console.log(id, photo);

  try {
    const FILE_SIZE = 1024 * 1024; // 1MB

    if (photo.length > FILE_SIZE) {
      return {
        message: "File size is too large",
      };
    }

    // Remove header of base64 string if present
    const base64Image = photo.replace(/^data:image\/\w+;base64,/, "");

    // Create buffer from base64 string
    const imageBuffer = Buffer.from(base64Image, "base64");

    const fileName = `image_${Date.now()}.png`;

    console.log("Writing file:", fileName);

    // Ensure the directory exists
    const directory = path.join(process.cwd(), "public/uploads");
    await fs.mkdir(directory, { recursive: true });

    try {
      // Write the file
      await fs.writeFile(path.join(directory, fileName), imageBuffer);
      console.log("File saved successfully:", fileName);

      // Update the database with the filename
      const newMemberPhoto = await query({
        query: "UPDATE members SET photo = ? WHERE id = ?",
        values: [fileName, id],
      });

      console.log(newMemberPhoto);
    } catch (error) {
      console.error("Error saving file:", error);
    }

    // Revalidate path (assuming revalidatePath is defined elsewhere)
    revalidatePath("/dashboard/gym/member");

    return {
      message: "Updated",
    };
  } catch (err) {
    console.error(err);
    return {
      message: "Failed",
    };
  }
};

export const changePackage = async (prevState, formData) => {
  const { id, newPackage, activeStatus, credit, pin_number } =
    Object.fromEntries(formData);

  console.log(id, newPackage, activeStatus, credit, pin_number);

  try {
    const changePackage = await query({
      query:
        "UPDATE members SET package_id = ?, active_status = ?, credit_balance = ?, CardNo = ?   WHERE id = ?",
      values: [newPackage, activeStatus, credit, pin_number, id],
    });

    console.log(changePackage);

    revalidatePath("/dashboard/gym/member");

    return {
      message: "Updated",
    };
  } catch (err) {
    console.error(err);
    return {
      message: "Failed",
    };
  }
};

export const changeCycle = async (prevState, formData) => {
  const { renew_date, id } = Object.fromEntries(formData);

  console.log(renew_date, id);

  try {
    const changeRenewalDate = await query({
      query: "UPDATE members SET renew_date = ?  WHERE id = ?",
      values: [renew_date, id],
    });

    console.log(changeRenewalDate);

    revalidatePath("/dashboard/gym/member");

    return {
      message: "Updated",
    };
  } catch (err) {
    console.error(err);
    return {
      message: "Failed",
    };
  }
};

export const addPayment = async (prevState, formData) => {
  // In addPayment I have to include m_invoice like I have to UPDATE m_invoice where I need to updaet specificlly payAmount / invoice_amount , invoice discount , status, payDate
  const {
    invoice_id,
    collector_id,
    collected_by,
    amount,
    amount_due,
    pay_type,
    discount,
    m_id,
  } = Object.fromEntries(formData);

  const pay_date = new Date().toISOString().split("T")[0];

  // Calculate the new amount due
  const newAmountDue = amount_due - amount;

  console.log(
    invoice_id,
    collector_id,
    collected_by,
    pay_date,
    amount,
    newAmountDue,
    pay_type,
    discount
  );

  try {
    const newPayment = await query({
      query:
        "INSERT INTO m_payment (invoice_id, collector_id, collected_by, pay_date, amount, amount_due, pay_type, discount, m_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      values: [
        invoice_id,
        collector_id,
        collected_by,
        pay_date,
        amount,
        newAmountDue,
        pay_type,
        discount,
        m_id,
      ],
    });

    console.log(newPayment);

    const status = "Paid";

    const updateInv = await query({
      query:
        "UPDATE m_invoice SET invoice_paydate = ?, invoice_pay_amount = ?, invoice_discount = ?, invoice_due_amount = ?, status = ?   WHERE m_id = ?",
      values: [pay_date, amount, discount, newAmountDue, status, m_id],
    });

    console.log(updateInv);
  } catch (err) {
    if (err) {
      console.log(err);
      return {
        message: "Already Exits",
      };
    }
  }

  revalidatePath("/dashboard/gym/memberDetails");
  return {
    message: "Added",
  };
};
