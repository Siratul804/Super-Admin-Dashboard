import MemberDetails from "@/app/ui/Gym/MemberDetalis/MemberDetalis";

import { GetMemberDataById } from "@/app/lib/data";

import { GetMemberInvoiceDataById } from "@/app/lib/data";

import { GetAllPackages } from "@/app/lib/data";

import { auth } from "@/app/auth";

const page = async ({ params }) => {
  const { id } = params;
  const { user } = await auth();
  const packgaeData = await GetAllPackages();

  const MemberSpecificData = await GetMemberDataById(id);

  const MemberInvoiceSpecificData = await GetMemberInvoiceDataById(id);

  return (
    <>
      <MemberDetails
        user={user}
        MemberSpecificData={MemberSpecificData}
        id={id}
        MemberInvoiceSpecificData={MemberInvoiceSpecificData}
        packgaeData={packgaeData}
      />
    </>
  );
};

export default page;
