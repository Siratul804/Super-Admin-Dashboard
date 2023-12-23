import AddUser from "../AddUser/AddUser";
import EditTable from "./EditTable";
import SearchBox from "../SearchUser/SearchBox";
import Pagination from "../Pagination/Pagination";

const EditUser = async ({ FilPageData, PaginationCount, PaginationData }) => {
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
                Advance User List
              </h1>
              <AddUser />
            </div>
          </div>
          <EditTable
            FilPageData={FilPageData}
            PaginationData={PaginationData}
          />
          <Pagination PaginationCount={PaginationCount} />
        </section>
      </div>
    </>
  );
};

export default EditUser;
