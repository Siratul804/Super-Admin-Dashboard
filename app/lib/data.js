"use server";
import { query } from "./db";
export async function GetUserData(request) {
  const users = await query({
    query: "SELECT * FROM users",
    values: [],
  });

  return users;
}
export async function GetUserByIdToUpdate(id) {
  console.log(id);
  const users = await query({
    query: "SELECT * FROM users WHERE id = ?",
    values: [id],
  });

  return users[0];
}
