import EditUser from "@/app/ui/Grit/Edit/EditUser/EditUser";
import { GetUserData } from "@/app/lib/data";
import { GetGritFilterData } from "@/app/lib/data";
const Edit = async ({ searchParams }) => {
  const name = searchParams?.name || "";
  const number = searchParams?.number || "";
  const status = searchParams?.status || "";

  const data = await GetUserData();
  const filterData = await GetGritFilterData(name, number, status);

  return (
    <>
      <EditUser data={data} filterData={filterData} />
    </>
  );
};

export default Edit;
