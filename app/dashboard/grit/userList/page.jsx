import EditUser from "@/app/ui/Grit/Edit/EditUser/EditUser";
import { GetGritPaginationData } from "@/app/lib/data";
import { GetRoleData } from "@/app/lib/data";

import { GetRolePermissionData } from "@/app/lib/data";

const Edit = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const name = searchParams?.name || "";
  const number = searchParams?.number || "";
  const status = searchParams?.status || "";
  // console.log(name, number, status);

  const { paginationGrit, countNumber } = await GetGritPaginationData(
    page,
    name,
    number,
    status
  );
  const roleData = await GetRoleData();

  // console.log(roleData);

  const permissionActiveData = await GetRolePermissionData(); // issue in here . Need to cache data or update value of role_id and transfer to backend

  console.log(permissionActiveData);

  return (
    <>
      <EditUser
        PaginationData={paginationGrit}
        PaginationCount={countNumber}
        roleData={roleData}
        permissionData={permissionActiveData}
      />
    </>
  );
};

export default Edit;
