import MemberDetails from "@/app/ui/Gym/MemberDetalis/MemberDetalis";

import { GetMemberDataById } from "@/app/lib/data";

const page = async ({ params }) => {
  const { id } = params;

  const MemberSpecificData = await GetMemberDataById(id);

  return (
    <>
      <MemberDetails MemberSpecificData={MemberSpecificData} id={id} />
    </>
  );
};

export default page;
