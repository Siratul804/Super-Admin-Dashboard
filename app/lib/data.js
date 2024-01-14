"use server";
//users
import { query } from "./db";
export async function GetUserData(request) {
  const users = await query({
    query: "SELECT * FROM users WHERE type = 'Grit'",
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

//Paginaion User/Grit Data
export async function GetGritPaginationData(page, name, number, status) {
  const ITEM_PER_PAGE = 10;
  const ITEM_PER_PAGE_STRING = ITEM_PER_PAGE.toString();

  const offset = (page - 1) * ITEM_PER_PAGE;

  const OFF_SET_PAGE = offset.toString();

  console.log(page, name, number, status);

  let queryStr = "SELECT * FROM users WHERE type = 'Grit'";

  const values = [];

  if (name) {
    queryStr += " AND name LIKE ?";
    values.push(`%${name}%`);
  }

  if (number) {
    queryStr += " AND number LIKE ?";
    values.push(`%${number}%`);
  }

  if (status) {
    queryStr += " AND status = ?";
    values.push(status);
  }

  queryStr += " LIMIT ? OFFSET ?";

  values.push(ITEM_PER_PAGE_STRING, OFF_SET_PAGE);

  const paginationGrit = await query({
    query: queryStr,
    values: values,
  });

  const paginationCount = await query({
    query: "SELECT COUNT(*) FROM users WHERE type = 'Grit'",
    values: [],
  });

  const countNumber = paginationCount[0]["COUNT(*)"];

  return { paginationGrit, countNumber };
}

// permissions

export async function GetPermissionData(request) {
  const permission = await query({
    query: "SELECT * FROM permission",
    values: [],
  });

  return permission;
}
export async function GetRoleData(request) {
  const role = await query({
    query: "SELECT * FROM role",
    values: [],
  });

  return role;
}

export async function GetGritRolePaginationData(page, name, status) {
  const ITEM_PER_PAGE = 10;
  const ITEM_PER_PAGE_STRING = ITEM_PER_PAGE.toString();

  const offset = (page - 1) * ITEM_PER_PAGE;

  const OFF_SET_PAGE = offset.toString();

  console.log(page, name, status);

  let queryStr = "SELECT * FROM role";

  const values = [];

  if (name) {
    queryStr += " AND (name LIKE ?)";
    values.push(`%${name}%`);
  }

  if (status) {
    queryStr += " AND (status = ?)";
    values.push(status);
  }

  queryStr += " LIMIT ? OFFSET ?";

  values.push(ITEM_PER_PAGE_STRING, OFF_SET_PAGE);

  const paginationGrit = await query({
    query: queryStr,
    values: values,
  });

  const paginationCount = await query({
    query: "SELECT COUNT(*) FROM role",
    values: [],
  });

  const countNumber = paginationCount[0]["COUNT(*)"];

  return { paginationGrit, countNumber };
}
