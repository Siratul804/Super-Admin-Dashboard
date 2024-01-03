import RoleGrit from "@/app/ui/Grit/Role/RoleGrit";
import { GetPermissionData } from "@/app/lib/data";
const Role = async () => {
  const permission = await GetPermissionData();
  console.log(permission);
  return (
    <>
      <RoleGrit permissionData={permission} />
    </>
  );
};

export default Role;
