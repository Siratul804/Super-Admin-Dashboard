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
//grit
export const addUser = async (prevState, formData) => {
  const { name, email, password, number, role, status } =
    Object.fromEntries(formData);
  try {
    const hasedPassword = await bcrypt.hash(password, 10);

    const image = "img.png";

    const newUser = await query({
      query:
        "INSERT INTO users (name, email, password, number, img, role, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
      values: [name, email, hasedPassword, number, image, role, status],
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
  const { id, name, email, number, role, status } =
    Object.fromEntries(formData);

  try {
    const newUser = await query({
      query:
        "UPDATE users SET  name = ?, email = ?, number = ?, role = ?, status = ? WHERE id = ?",
      values: [name, email, number, role, status, id],
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

  if (previous !== password) {
    return "Password Did't Match";
  }

  const hasedPassword = await bcrypt.hash(password, 10);

  const newPass = await query({
    query: "UPDATE users SET password = ? WHERE id = ?",
    values: [hasedPassword, id],
  });

  if (!newPass) {
    return "Faile to Change Password";
  }
  if (newPass) {
    console.log("Password Changed");
    return "Password Changed";
  }
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  const deleteMember = await query({
    query: "DELETE FROM users WHERE id = (?)",
    values: [id],
  });

  if (deleteMember) {
    console.log("user deleted");
    redirect("/dashboard/grit/edit");
  }
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

// img
export const addImg = async (prevState, formData) => {
  const { id, file } = Object.fromEntries(formData);

  const FILE_SIZE = 1000000; // 1MB

  if (file.size > FILE_SIZE) {
    return "File size is large! (image has to be less then 1MB) ";
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

  if (newImg) {
    console.log("Image Added");
    redirect("/dashboard");
  }
  if (!newImg) {
    return "Image Added Failed ";
  }
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
