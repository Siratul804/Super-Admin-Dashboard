import Link from "next/link";
import Pagination from "../Pagination/Pagination";
import SearchBox from "../SearchRole/SearchBox";
import EditTable from "./EditRoleTable";
import { IoMdAdd } from "react-icons/io";
const EditRole = ({ PaginationCount, PaginationData, permissionData }) => {
  console.log(permissionData);

  const permission = permissionData.map((val) => val.permission_id);

  console.log(permission);
  return (
    <>
      <div className="">
        <div className="py-2"></div>
        <SearchBox />
        <div className="py-5"></div>
        <section className="bg-white w-full shadow-lg rounded-lg">
          <div className="">
            <div className="p-3  flex justify-between  ">
              <h1 className="text-lg font-bold text-black ">Role List</h1>
              <Link
                href="/dashboard/grit/createRole"
                className="bg-black rounded-lg text-white text-sm"
              >
                {permission.includes(7) && (
                  <button className="btn btn-neutral btn-sm text-white  ">
                    <IoMdAdd size={17} /> Add Role
                  </button>
                )}
              </Link>
            </div>
          </div>
          {permission.includes(9) && (
            <EditTable
              permission={permission}
              PaginationData={PaginationData}
            />
          )}

          <Pagination PaginationCount={PaginationCount} />
        </section>
      </div>
    </>
  );
};

export default EditRole;
