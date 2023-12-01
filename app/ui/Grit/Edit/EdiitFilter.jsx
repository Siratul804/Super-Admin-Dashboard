// "use client";
// import { useSearchParams } from "next/navigation";
import { GetGritFilterData } from "@/app/lib/data";
const EdiitFilter = async () => {
  // const searchParams = useSearchParams();
  // const name = searchParams.get("name");
  // const number = searchParams.get("number");
  // const status = searchParams.get("status");
  const name = "";
  const number = "";
  const status = "Disable";
  const filterData = await GetGritFilterData(name, number, status);
  return (
    <>
      {filterData.map((val) => (
        <>
          <p>{val.name}</p>
          <p>{val.number}</p>
          <p>{val.status}</p>
        </>
      ))}
    </>
  );
};

export default EdiitFilter;
