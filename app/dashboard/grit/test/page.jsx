import { GetRoleData } from "@/app/lib/data";
import TestGrit from "@/app/ui/Grit/Test/TestGrit";
const Test = async () => {
  const role = await GetRoleData();
  console.log(role);
  return (
    <>
      <TestGrit roleData={role} />
    </>
  );
};

export default Test;
