"use server";
import { query } from "./db";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "@/app/auth";

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

  const image = "img.jpg";

  const newUser = await query({
    query:
      "INSERT INTO users (name, email, password, number, img, role, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
    values: [name, email, hasedPassword, number, image, role, status],
  });

  if (!newUser) {
    return "Faile to Singup";
  }
  if (newUser) {
    redirect("/");
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
