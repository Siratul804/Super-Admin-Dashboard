import Create from "@/app/ui/Gym/Setting/RolesComponents/Create";
import { GetPermissionDataOfGym } from "@/app/lib/data";
const page = async ({ params }) => {
  const { id } = params;
  console.log(id);
  const permissionData = await GetPermissionDataOfGym();
  return (
    <>
      <Create permissionData={permissionData} gym_id={id} />
    </>
  );
};

export default page;
