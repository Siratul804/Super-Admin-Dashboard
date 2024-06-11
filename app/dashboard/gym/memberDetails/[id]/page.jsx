import MemberDetails from "@/app/ui/Gym/MemberDetalis/MemberDetalis";

import { GetMemberDataById } from "@/app/lib/data";

import { GetAllPackages } from "@/app/lib/data";

import { auth } from "@/app/auth";

import { GetMemberInvoiceDataBy } from "@/app/lib/data";

import { GetPaymentDataById } from "@/app/lib/data";

import { GetGymListData } from "@/app/lib/data";

const page = async ({ params, searchParams }) => {
  const { id } = params;
  const { user } = await auth();
  const packgaeData = await GetAllPackages();

  const MemberSpecificData = await GetMemberDataById(id);

  const PaymentSpecificData = await GetPaymentDataById(id);

  const page = searchParams?.page || 1;
  const status = searchParams?.status || "";
  const date = searchParams?.date || "";
  const GetGym = await GetGymListData();

  const { paginationInvoice, countNumber } = await GetMemberInvoiceDataBy(
    page,
    status,
    date
  );

  return (
    <>
      <MemberDetails
        user={user}
        MemberSpecificData={MemberSpecificData}
        id={id}
        packgaeData={packgaeData}
        paginationInvoice={paginationInvoice}
        countNumber={countNumber}
        PaymentSpecificData={PaymentSpecificData}
        GetGymData={GetGym}
      />
    </>
  );
};

export default page;
