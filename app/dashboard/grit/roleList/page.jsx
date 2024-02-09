import EditRole from "@/app/ui/Grit/Role/EditRole/EditRole";
import { GetGritRolePaginationData } from "@/app/lib/data";
// import { GetRoleData } from "@/app/lib/data";
import { GetRolePermissionData } from "@/app/lib/data";

const RoleList = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const name = searchParams?.name || "";
  const status = searchParams?.status || "";

  const { paginationGrit, countNumber } = await GetGritRolePaginationData(
    page,
    name,
    status
  );

  const permissionActiveData = await GetRolePermissionData();

  console.log(permissionActiveData);

  return (
    <>
      <EditRole
        PaginationData={paginationGrit}
        PaginationCount={countNumber}
        permissionData={permissionActiveData}
      />
    </>
  );
};

export default RoleList;
