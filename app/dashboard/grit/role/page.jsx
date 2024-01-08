import RoleGrit from "@/app/ui/Grit/Role/RoleGrit";
import { GetPermissionData } from "@/app/lib/data";
const Role = async () => {
  const permissionData = await GetPermissionData();

  return (
    <>
      <RoleGrit permissionData={permissionData} />
    </>
  );
};

export default Role;
