import Pagination from "../Pagination/Pagination";
import SearchBox from "../SearchUser/SearchBox";
import AddPackage from "../AddPackage/AddPackage";
import EditTable from "./EditTable";

const EditPackage = async ({
  PaginationCount,
  PaginationData,
  roleData,
  // permissionData,
  user,
}) => {
  // console.log(permissionData);

  // const permission = permissionData.map((val) => val.permission_id);

  // console.log(permission);

  return (
    <>
      <div className="">
        <div className="py-2"></div>
        <SearchBox />
        <div className="py-5"></div>
        <section className="bg-white w-full shadow-lg rounded-lg">
          <div className="">
            <div className="p-3 flex justify-between  ">
              <h1 className="text-lg font-bold text-black ">Package List</h1>
              {/* {permission.includes(3) && <AddUser roleData={roleData} />} */}
              <AddPackage roleData={roleData} user={user} />
            </div>
          </div>

          <>
            <div className="overflow-x-auto h-[52vh]">
              <EditTable
                // permission={permission}
                PaginationData={PaginationData}
                roleData={roleData}
                user={user}
              />
            </div>
          </>

          <Pagination PaginationCount={PaginationCount} />
        </section>
      </div>
    </>
  );
};

export default EditPackage;
