import MemberList from "@/app/ui/Gym/Member/EditMember/EditMember";
import { auth } from "@/app/auth";

import { GetAllPackages } from "@/app/lib/data";

const page = async ({ searchParams }) => {
  const { user } = await auth();
  console.log(user);

  const page = searchParams?.page || 1;
  const name = searchParams?.name || "";
  const number = searchParams?.number || "";
  const status = searchParams?.status || "";

  const packgaeData = await GetAllPackages();

  console.log(packgaeData);

  return (
    <>
      <MemberList user={user} packgaeData={packgaeData} />
    </>
  );
};

export default page;
