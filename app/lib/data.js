"use server";
//users
import { query } from "./db";
export async function GetUserData(request) {
  const users = await query({
    query: "SELECT * FROM users WHERE role = 'Grit'",
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

//filter User/Grit Data

// export async function GetSearchData(name, number, status) {
//   let queryStr = "SELECT * FROM users";
//   const values = [];

//   if (name || number || status) {
//     queryStr += " WHERE";
//     if (name) {
//       queryStr += " `name` LIKE ?";
//       values.push(`%${name}%`);
//     }
//     if (number) {
//       queryStr += (name ? " OR" : "") + " `number` LIKE ?";
//       values.push(`%${number}%`);
//     }
//     if (status) {
//       queryStr += (name || number ? " OR" : "") + " `status` LIKE ?";
//       values.push(`%${status}%`);
//     }
//   }

//   const searchData = await query({
//     query: queryStr,
//     values: values,
//   });

//   console.log(searchData);
//   return { searchData };
// }

//Paginaion User/Grit Data
export async function GetGritPaginationData(page, name, number, status) {
  const ITEM_PER_PAGE = 10;
  const ITEM_PER_PAGE_STRING = ITEM_PER_PAGE.toString();

  const offset = (page - 1) * ITEM_PER_PAGE;

  const OFF_SET_PAGE = offset.toString();

  console.log(page, name, number, status);

  // const paginationGrit = await query({
  //   query:
  //     "SELECT * FROM users WHERE role = 'Grit' AND name LIKE ? AND number LIKE ? AND status = ? LIMIT ? OFFSET ?",
  //   values: [
  //     `%${name}%`,
  //     `%${number}%`,
  //     status,
  //     ITEM_PER_PAGE_STRING,
  //     OFF_SET_PAGE,
  //   ],
  // });

  let queryStr = "SELECT * FROM users WHERE role = 'Grit'";

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
    query: "SELECT COUNT(*) FROM users WHERE role = 'Grit'",
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
