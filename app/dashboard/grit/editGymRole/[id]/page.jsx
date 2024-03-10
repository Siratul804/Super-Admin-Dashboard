import Update from "@/app/ui/Grit/GymDetails/GymNavDetails/RolesComponents/Update";

import { GetRoleByIdToUpdateOfGym } from "@/app/lib/data";

import { GetPermissionDataOfGym } from "@/app/lib/data";
import { GetRolePermissionByIdToUpdateOfGym } from "@/app/lib/data";

const page = async ({ params }) => {
  const permissionData = await GetPermissionDataOfGym();
  const { id } = params;
  const roleDataId = await GetRoleByIdToUpdateOfGym(id);
  const permissionActiveData = await GetRolePermissionByIdToUpdateOfGym(id);

  // console.log(permissionActiveData, permissionData);

  // console.log(id);

  return (
    <>
      <Update
        id={id}
        roleData={roleDataId}
        permissionData={permissionData}
        permissionActiveData={permissionActiveData}
      />
    </>
  );
};

export default page;
