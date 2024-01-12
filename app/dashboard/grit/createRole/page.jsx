import CreateRoleGrit from "@/app/ui/Grit/Role/CreateRoleGrit";
import { GetPermissionData } from "@/app/lib/data";
const Role = async () => {
  const permissionData = await GetPermissionData();

  return (
    <>
      <CreateRoleGrit permissionData={permissionData} />
    </>
  );
};

export default Role;
