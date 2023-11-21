"use server";
import { query } from "./db";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "@/app/auth";
import path from "path";
import { writeFile } from "fs/promises";

export const addUser = async (prevState, formData) => {
  const { name, email, password, number, role, status } =
    Object.fromEntries(formData);

  const user = await query({
    query: "SELECT email FROM users WHERE email = (?)",
    values: [email],
  });

  if (user[0]) {
    return "User Already Exits";
  }

  const hasedPassword = await bcrypt.hash(password, 10);

  const image = "img.png";

  const newUser = await query({
    query:
      "INSERT INTO users (name, email, password, number, img, role, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
    values: [name, email, hasedPassword, number, image, role, status],
  });

  if (!newUser) {
    throw new Error("Faile to Singup");
  }
  if (newUser) {
    redirect("/dashboard/grit/edit");
  }
};
export const updateUser = async (formData) => {
  const { id, name, email, number, role, status } =
    Object.fromEntries(formData);

  const newUser = await query({
    query:
      "UPDATE users SET  name = ?, email = ?, number = ?, role = ?, status = ? WHERE id = ?",
    values: [name, email, number, role, status, id],
  });

  if (!newUser) {
    throw new Error("Faile to update user");
  }
  if (newUser) {
    console.log("user updated");
    redirect("/dashboard/grit/edit");
  }
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
    redirect("/dashboard/grit/edit");
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

export const addImg = async (prevState, formData) => {
  const { id, file } = Object.fromEntries(formData);

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
    redirect("/dashboard/grit/edit");
  }
  if (!newImg) {
    return "Image Added Failed ";
  }
};
