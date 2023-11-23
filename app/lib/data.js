"use server";

//users
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

//members
export async function GetMemberData(request) {
  const members = await query({
    query: "SELECT * FROM members",
    values: [],
  });

  return members;
}

export async function GetMemberByIdToUpdate(id) {
  console.log(id);
  const members = await query({
    query: "SELECT * FROM members WHERE id = ?",
    values: [id],
  });

  return members[0];
}
