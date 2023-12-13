import EditUser from "@/app/ui/Grit/Edit/EditUser/EditUser";
import { GetUserData } from "@/app/lib/data";
import { GetGritFilterData } from "@/app/lib/data";
import { GetGritPaginationData } from "@/app/lib/data";
import { Toaster } from "react-hot-toast";
const Edit = async ({ searchParams }) => {
  const name = searchParams?.name || "";
  const number = searchParams?.number || "";
  const status = searchParams?.status || "";

  const page = searchParams?.page || 1;

  const data = await GetUserData();
  const filterData = await GetGritFilterData(name, number, status);
  const { paginationGrit, countNumber } = await GetGritPaginationData(page);

  return (
    <>
      <EditUser
        data={data}
        filterData={filterData}
        PaginationData={paginationGrit}
        PaginationCount={countNumber}
      />
      <Toaster
        toastOptions={{ duration: 3000 }}
        reverseOrder={false}
        position="bottom-right"
      />
    </>
  );
};

export default Edit;
