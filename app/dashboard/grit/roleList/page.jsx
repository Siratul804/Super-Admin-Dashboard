import EditRole from "@/app/ui/Grit/Role/EditRole/EditRole";
import { GetGritRolePaginationData } from "@/app/lib/data";
// import { GetRoleData } from "@/app/lib/data";

const RoleList = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const name = searchParams?.name || "";
  const status = searchParams?.status || "";

  const { paginationGrit, countNumber } = await GetGritRolePaginationData(
    page,
    name,
    status
  );

  return (
    <>
      <EditRole PaginationData={paginationGrit} PaginationCount={countNumber} />
    </>
  );
};

export default RoleList;
