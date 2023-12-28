import { GetGritPaginationData } from "@/app/lib/data";
import TestGrit from "@/app/ui/Grit/Test/TestGrit";
const Test = async () => {
  const { paginationGrit } = await GetGritPaginationData();

  return (
    <>
      <TestGrit searchDeal={paginationGrit} />
    </>
  );
};

export default Test;
