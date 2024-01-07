import EditUser from "@/app/ui/Grit/Edit/EditUser/EditUser";
import { GetGritPaginationData } from "@/app/lib/data";
import { GetRoleData } from "@/app/lib/data";

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

  return (
    <>
      <EditUser
        PaginationData={paginationGrit}
        PaginationCount={countNumber}
        roleData={roleData}
      />
    </>
  );
};

export default Edit;
