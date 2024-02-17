import ListOfGymGrit from "@/app/ui/Grit/ListOfGym/EditGym/EditGym";

import { GetGListGymPaginationData } from "@/app/lib/data";

const ListOfGym = async ({ searchParams }) => {
  const page = searchParams?.page || 1;
  const name = searchParams?.name || "";
  const status = searchParams?.status || "";

  const { paginationGrit, countNumber } = await GetGListGymPaginationData(
    page,
    name,
    status
  );

  return (
    <>
      <ListOfGymGrit
        PaginationData={paginationGrit}
        PaginationCount={countNumber}
      />
    </>
  );
};

export default ListOfGym;
