import Role from "@/app/ui/Gym/Setting/Role";

import { GetRoleDataOfGym } from "@/app/lib/data";

import { GetGritRolePaginationDataOfGym } from "@/app/lib/data";

import { auth } from "@/app/auth";

const page = async ({ searchParams }) => {
  const { user } = await auth();
  console.log(user);

  const rolePage = searchParams?.rolePage || 1;
  const roleName = searchParams?.roleName || "";
  const roleStatus = searchParams?.roleStatus || "";

  const { paginationGymRole, countNumberGymRole } =
    await GetGritRolePaginationDataOfGym(rolePage, roleName, roleStatus);

  const roleData = await GetRoleDataOfGym();

  return (
    <>
      <Role
        user={user}
        RolePaginationData={paginationGymRole}
        RolePaginationCount={countNumberGymRole}
        roleData={roleData}
      />
    </>
  );
};

export default page;
