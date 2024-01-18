import UpdateRole from "@/app/ui/Grit/Role/UpdateRole/UpdateRole";

import { GetRoleByIdToUpdate } from "@/app/lib/data";

import { GetPermissionData } from "@/app/lib/data";
import { GetRolePermissionByIdToUpdate } from "@/app/lib/data";

const EditRole = async ({ params }) => {
  const permissionData = await GetPermissionData();
  const { id } = params;
  const roleDataId = await GetRoleByIdToUpdate(id);
  const permissionActiveData = await GetRolePermissionByIdToUpdate(id);

  console.log(permissionActiveData, permissionData);

  console.log(id);

  return (
    <>
      <UpdateRole
        id={id}
        roleData={roleDataId}
        permissionData={permissionData}
        permissionActiveData={permissionActiveData}
      />
    </>
  );
};

export default EditRole;
