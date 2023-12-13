import AddUser from "../AddUser/AddUser";
import EditTable from "./EditTable";
import SearchBox from "../SearchUser/SearchBox";
import Pagination from "../Pagination/Pagination";

const EditUser = async ({
  data,
  filterData,
  PaginationData,
  PaginationCount,
}) => {
  return (
    <>
      <div className="">
        <div className="py-2"></div>
        <SearchBox />
        <div className="py-5"></div>
        <section className="bg-white w-full shadow-lg p-3 rounded-lg">
          <div className="pt-2 pb-4  flex justify-between  ">
            <h1 className="text-lg font-bold text-black ">Advance User List</h1>
            <AddUser />
          </div>
          <EditTable
            data={data}
            filterData={filterData}
            PaginationData={PaginationData}
          />
          <Pagination PaginationCount={PaginationCount} />
        </section>
      </div>
    </>
  );
};

export default EditUser;
