import UpdateRole from "@/app/ui/Grit/Role/UpdateRole/UpdateRole";

import { GetRoleByIdToUpdate } from "@/app/lib/data";

import { GetPermissionData } from "@/app/lib/data";

import React from "react";

const EditRole = async ({ params }) => {
  const permissionData = await GetPermissionData();
  const { id } = params;
  const roleDataId = await GetRoleByIdToUpdate(id);

  console.log(id);

  return (
    <>
      <UpdateRole
        id={id}
        roleData={roleDataId}
        permissionData={permissionData}
      />
    </>
  );
};

export default EditRole;
