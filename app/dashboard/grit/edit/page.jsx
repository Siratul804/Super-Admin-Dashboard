import EditUser from "@/app/ui/Grit/Edit/EditUser";
import { GetUserData } from "@/app/lib/data";
const Edit = async () => {
  const data = await GetUserData();
  return (
    <>
      <EditUser data={data} />
    </>
  );
};

export default Edit;
