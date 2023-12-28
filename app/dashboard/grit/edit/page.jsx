import EditUser from "@/app/ui/Grit/Edit/EditUser/EditUser";
import { GetGritPaginationData } from "@/app/lib/data";
import { GetUserData } from "@/app/lib/data";

const Edit = async ({ searchParams }) => {
  const page = searchParams?.page || 1;

  const { paginationGrit, countNumber } = await GetGritPaginationData(page);

  const searchData = await GetUserData();

  return (
    <>
      <EditUser
        PaginationData={paginationGrit}
        SearchData={searchData}
        PaginationCount={countNumber}
      />
    </>
  );
};

export default Edit;
