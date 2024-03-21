import User from "@/app/ui/Gym/Setting/User";
import { auth } from "@/app/auth";
import { GetGymUserPaginationData } from "@/app/lib/data";

import { GetRoleDataOfGym } from "@/app/lib/data";

const page = async ({ searchParams }) => {
  const { user } = await auth();
  console.log(user);

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

  console.log(paginationGym);

  const roleData = await GetRoleDataOfGym();

  return (
    <>
      <User
        user={user}
        GymUserData={paginationGym}
        PaginationCount={countNumber}
        roleData={roleData}
      />
    </>
  );
};

export default page;
