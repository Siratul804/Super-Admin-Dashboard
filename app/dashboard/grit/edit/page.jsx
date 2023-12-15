import EditUser from "@/app/ui/Grit/Edit/EditUser/EditUser";
// import { GetGritFilterData } from "@/app/lib/data";
import { GetGritPaginationData } from "@/app/lib/data";
import { GetGritFillPagiData } from "@/app/lib/data";

const Edit = async ({ searchParams }) => {
  const name = searchParams?.name || "";
  const number = searchParams?.number || "";
  const status = searchParams?.status || "";

  const page = searchParams?.page || 1;

  // const filterData = await GetGritFilterData(name, number, status);
  const { paginationGrit } = await GetGritPaginationData(page);
  const { FillPagiGrit, countNumber } = await GetGritFillPagiData(
    name,
    number,
    status,
    page
  );

  return (
    <>
      <EditUser
        // filterData={filterData}
        // PaginationData={paginationGrit}
        // PaginationCount={countNumber}
        PaginationData={paginationGrit}
        FilPageData={FillPagiGrit}
        PaginationCount={countNumber}
      />
    </>
  );
};

export default Edit;
