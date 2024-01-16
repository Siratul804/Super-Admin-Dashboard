import Link from "next/link";
import Pagination from "../Pagination/Pagination";
import SearchBox from "../SearchRole/SearchBox";
import EditTable from "./EditRoleTable";
import { IoMdAdd } from "react-icons/io";
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
                className="bg-black rounded-lg text-white text-sm"
              >
                <button className="btn btn-neutral btn-sm text-white  ">
                  <IoMdAdd size={17} /> Add Role
                </button>
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
