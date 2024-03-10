import GymDetails from "@/app/ui/Grit/GymDetails/GymDetails";

import { GetGymDataById } from "@/app/lib/data";

import { GetGymUserPaginationData } from "@/app/lib/data";

import { GetRoleDataOfGym } from "@/app/lib/data";

import { GetGritRolePaginationDataOfGym } from "@/app/lib/data";

const GymInfoWithControl = async ({ params, searchParams }) => {
  const { id } = params;
  const GymSpecificData = await GetGymDataById(id);

  const page = searchParams?.page || 1;
  const name = searchParams?.name || "";
  const number = searchParams?.number || "";
  const status = searchParams?.status || "";
  const { paginationGym, countNumber } = await GetGymUserPaginationData(
    page,
    name,
    number,
    status
  );

  //role & permission
  const rolePage = searchParams?.rolePage || 1;
  const roleName = searchParams?.roleName || "";
  const roleStatus = searchParams?.roleStatus || "";

  const { paginationGymRole, countNumberGymRole } =
    await GetGritRolePaginationDataOfGym(rolePage, roleName, roleStatus);

  const roleData = await GetRoleDataOfGym();

  console.log(paginationGym);
  // console.log(GymUserData);
  return (
    <>
      <GymDetails
        GymSpecificData={GymSpecificData}
        GymUserData={paginationGym}
        PaginationCount={countNumber}
        roleData={roleData}
        id={id}
        //role & permission
        RolePaginationData={paginationGymRole}
        RolePaginationCount={countNumberGymRole}
      />
    </>
  );
};

export default GymInfoWithControl;
