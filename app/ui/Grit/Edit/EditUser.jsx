import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import EditTable from "./EditTable";
import SearchBox from "./SearchBox";

const EditUser = async ({ data, filterData }) => {
  return (
    <>
      <div className="pt-5 sm:pt-5  ">
        <SearchBox />
        <div className="py-8 flex justify-end ">
          <Link href="/dashboard/grit/signup">
            <button className="btn btn-neutral btn-sm text-white ">
              <IoMdAdd size={17} /> Add Grit
            </button>
          </Link>
        </div>
        <section className=" p-3 bg-white w-full rounded-xl shadow-md flex  items-center justify-center">
          <EditTable data={data} filterData={filterData} />
        </section>
      </div>
    </>
  );
};

export default EditUser;
