import Pagination from "../Pagination/Pagination";
import SearchBox from "../SearchUser/SearchBox";
import AddUser from "../AddUser/AddUser";
import EditTable from "./EditTable";

const EditUser = async ({
  PaginationCount,
  PaginationData,
  roleData,
  permissionData,
}) => {
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
            <div className="p-3 flex justify-between  ">
              <h1 className="text-lg font-bold text-black ">
                Advance User List
              </h1>
              {permission.includes(3) && <AddUser roleData={roleData} />}
            </div>
          </div>
          <EditTable PaginationData={PaginationData} roleData={roleData} />
          <Pagination PaginationCount={PaginationCount} />
        </section>
      </div>
    </>
  );
};

export default EditUser;
