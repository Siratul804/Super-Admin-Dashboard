"use server";
//users
import { query } from "./db";

import { auth } from "@/app/auth";
export async function GetAllUserData(request) {
  const users = await query({
    query: "SELECT * FROM users",
    values: [],
  });

  return users;
}
export async function GetGymData(request) {
  const users = await query({
    query: "SELECT * FROM users WHERE type = 'gym'",
    values: [],
  });

  return users;
}
export async function GetUserData(request) {
  const users = await query({
    query: "SELECT * FROM users WHERE type = 'grit'",
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

  if (name || status) {
    queryStr += " WHERE";
  }

  if (name) {
    queryStr += " name LIKE ?";
    values.push(`%${name}%`);
  }

  if (name && status) {
    queryStr += " AND";
  }

  if (status) {
    queryStr += " status = ?";
    values.push(status);
  }

  queryStr += " LIMIT ? OFFSET ?";

  values.push(ITEM_PER_PAGE_STRING, OFF_SET_PAGE);

  const paginationGrit = await query({
    query: queryStr,
    values: values,
  });

  console.log(paginationGrit);

  const paginationCount = await query({
    query: "SELECT COUNT(*) FROM role",
    values: [],
  });

  const countNumber = paginationCount[0]["COUNT(*)"];

  return { paginationGrit, countNumber };
}

export async function GetRoleByIdToUpdate(id) {
  console.log(id);
  const members = await query({
    query: "SELECT * FROM role WHERE id = ?",
    values: [id],
  });

  return members[0];
}

export async function GetRolePermissionByIdToUpdate(id) {
  console.log(id);
  const users = await query({
    query: "SELECT * FROM role_permission WHERE role_id = ?",
    values: [id],
  });

  return users;
}

// role & permission
export async function GetRolePermissionData() {
  const { user } = await auth();

  console.log(user.email);

  const role_id_main = await query({
    query: "SELECT role_id FROM users WHERE email = ?",
    values: [user.email],
  });

  console.log(role_id_main[0].role_id);

  const role_id = role_id_main[0].role_id;

  const permission = await query({
    query: "SELECT * FROM role_permission WHERE role_id = ?",
    values: [role_id],
  });

  return permission;
}

// list of Gym

export async function GetGListGymPaginationData(page, name, status) {
  const ITEM_PER_PAGE = 10;
  const ITEM_PER_PAGE_STRING = ITEM_PER_PAGE.toString();

  const offset = (page - 1) * ITEM_PER_PAGE;
  const OFF_SET_PAGE = offset.toString();

  console.log(page, name, status);

  let queryStr = "SELECT * FROM list_gym";

  const values = [];

  if (name || status) {
    queryStr += " WHERE";
  }

  if (name) {
    queryStr += " name LIKE ?";
    values.push(`%${name}%`);
  }

  if (name && status) {
    queryStr += " AND";
  }

  if (status) {
    queryStr += " status = ?";
    values.push(status);
  }

  queryStr += " LIMIT ? OFFSET ?";

  values.push(ITEM_PER_PAGE_STRING, OFF_SET_PAGE);

  const paginationGrit = await query({
    query: queryStr,
    values: values,
  });

  console.log(paginationGrit);

  const paginationCount = await query({
    query: "SELECT COUNT(*) FROM list_gym",
    values: [],
  });

  const countNumber = paginationCount[0]["COUNT(*)"];

  return { paginationGrit, countNumber };
}

//GymDetails

export async function GetGymDataById(id) {
  console.log(id);
  const users = await query({
    query: "SELECT * FROM list_gym WHERE id = ?",
    values: [id],
  });

  return users;
}

//GymUsersPaginationSearch

export async function GetGymUserPaginationData(page, name, number, status) {
  const ITEM_PER_PAGE = 10;
  const ITEM_PER_PAGE_STRING = ITEM_PER_PAGE.toString();

  const offset = (page - 1) * ITEM_PER_PAGE;

  const OFF_SET_PAGE = offset.toString();

  console.log(page, name, number, status);

  let queryStr = "SELECT * FROM users WHERE type = 'Gym'";

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

  const paginationGym = await query({
    query: queryStr,
    values: values,
  });

  const paginationCount = await query({
    query: "SELECT COUNT(*) FROM users WHERE type = 'Gym'",
    values: [],
  });

  const countNumber = paginationCount[0]["COUNT(*)"];

  return { paginationGym, countNumber };
}
