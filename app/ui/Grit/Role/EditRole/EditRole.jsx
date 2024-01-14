import Link from "next/link";
import Pagination from "../Pagination/Pagination";
import SearchBox from "../SearchRole/SearchBox";
import EditTable from "./EditRoleTable";
const EditRole = ({ PaginationCount, PaginationData }) => {
  return (
    <>
      <div className="">
        <div className="py-2"></div>
        <SearchBox />
        <div className="py-5"></div>
        <section className="bg-white w-full shadow-lg rounded-lg">
          <div className="">
            <div className="p-3  flex justify-between  ">
              <h1 className="text-lg font-bold text-black ">
                Advance Role List
              </h1>
              <Link
                href="/dashboard/grit/createRole"
                className="bg-black p-2 rounded-md font-bold text-white text-sm"
              >
                Add Role
              </Link>
            </div>
          </div>
          <EditTable PaginationData={PaginationData} />
          <Pagination PaginationCount={PaginationCount} />
        </section>
      </div>
    </>
  );
};

export default EditRole;
