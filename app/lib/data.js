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

//filter User/Grit Data

export async function GetGritFilterData(name, number, status) {
  const filterGrit = await query({
    query:
      "SELECT * FROM users WHERE `name` = ? OR `number` = ? OR `status` = ?",
    values: [name, number, status],
  });

  return filterGrit;
}

//Paginaion User/Grit Data
export async function GetGritPaginationData(page) {
  const ITEM_PER_PAGE = 3;
  const ITEM_PER_PAGE_STRING = ITEM_PER_PAGE.toString();

  const offset = (page - 1) * ITEM_PER_PAGE;

  const OFF_SET_PAGE = offset.toString();

  console.log(page);

  const paginationGrit = await query({
    query: "SELECT * FROM users WHERE role = 'Grit' LIMIT ?, ?",
    values: [OFF_SET_PAGE, ITEM_PER_PAGE_STRING],
  });
  const paginationCount = await query({
    query: "SELECT COUNT(*) FROM users WHERE role = 'Grit'",
    values: [],
  });

  const countNumber = paginationCount[0]["COUNT(*)"];

  // console.log(paginationGrit);
  // console.log(countNumber);
  return { paginationGrit, countNumber };
}

//Fill Pagi Data

export async function GetGritFillPagiData(name, number, status, page) {
  const ITEM_PER_PAGE = 3;
  const ITEM_PER_PAGE_STRING = ITEM_PER_PAGE.toString();

  const offset = (page - 1) * ITEM_PER_PAGE;

  const OFF_SET_PAGE = offset.toString();

  console.log(page);

  const FillPagiGrit = await query({
    query:
      "SELECT * FROM users WHERE role = 'Grit' AND (`name` = ? OR `number` = ? OR `status` = ?) LIMIT ?, ?",
    values: [name, number, status, OFF_SET_PAGE, ITEM_PER_PAGE_STRING],
  });
  const paginationCount = await query({
    query: "SELECT COUNT(*) FROM users WHERE role = 'Grit'",
    values: [],
  });

  const countNumber = paginationCount[0]["COUNT(*)"];

  return { FillPagiGrit, countNumber };
}
