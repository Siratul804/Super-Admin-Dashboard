"use server";
import { query } from "./db";
export async function GetUserData(request) {
  const users = await query({
    query: "SELECT * FROM users",
    values: [],
  });

  return users;
}
