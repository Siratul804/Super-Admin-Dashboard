import MemberList from "@/app/ui/Gym/Member/EditMember/EditMember";
import { auth } from "@/app/auth";
import { GetGymMemberPaginationData } from "@/app/lib/data";
import { GetAllPackages } from "@/app/lib/data";

const page = async ({ searchParams }) => {
  const { user } = await auth();
  console.log(user);

  const page = searchParams?.page || 1;
  const name = searchParams?.name || "";
  const number = searchParams?.number || "";
  const memberId = searchParams?.memberId || "";

  const { paginationMember, countNumber } = await GetGymMemberPaginationData(
    page,
    name,
    number,
    memberId
  );

  const packgaeData = await GetAllPackages();

  console.log(paginationMember);

  return (
    <>
      <MemberList
        user={user}
        packgaeData={packgaeData}
        MemberData={paginationMember}
        PaginationCount={countNumber}
      />
    </>
  );
};

export default page;
