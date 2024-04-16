import MemberDetails from "@/app/ui/Gym/MemberDetalis/MemberDetalis";

import { GetMemberDataById } from "@/app/lib/data";

import { GetAllPackages } from "@/app/lib/data";

const page = async ({ params }) => {
  const { id } = params;
  const packgaeData = await GetAllPackages();

  const MemberSpecificData = await GetMemberDataById(id);

  return (
    <>
      <MemberDetails
        MemberSpecificData={MemberSpecificData}
        id={id}
        packgaeData={packgaeData}
      />
    </>
  );
};

export default page;
