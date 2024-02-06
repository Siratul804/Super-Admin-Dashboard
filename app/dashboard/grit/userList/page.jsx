import EditUser from "@/app/ui/Grit/Edit/EditUser/EditUser";
import { GetGritPaginationData } from "@/app/lib/data";
import { GetRoleData } from "@/app/lib/data";

import { GetRolePermissionData } from "@/app/lib/data";

import { GetUserData } from "@/app/lib/data";

import { auth } from "@/app/auth";

const Edit = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const name = searchParams?.name || "";
  const number = searchParams?.number || "";
  const status = searchParams?.status || "";
  // console.log(name, number, status);

  const userData = await GetUserData();

  const { user } = await auth();

  console.log(user);

  const { paginationGrit, countNumber } = await GetGritPaginationData(
    page,
    name,
    number,
    status
  );
  const roleData = await GetRoleData();

  // console.log(roleData);

  // console.log(userData);

  const role_email = userData.map((val) => val.email);

  const role_user_email = user.email;

  console.log(role_email, role_user_email);

  const permissionActiveData = await GetRolePermissionData(user.role_id); // issue in here . Need to cache data or update value of role_id and transfer to backend

  // console.log(permissionActiveData);

  return (
    <>
      <EditUser
        PaginationData={paginationGrit}
        PaginationCount={countNumber}
        roleData={roleData}
        userData={userData}
        permissionData={permissionActiveData}
      />
    </>
  );
};

export default Edit;
