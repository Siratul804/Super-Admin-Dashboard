import Pagination from "../Pagination/Pagination";
import SearchBox from "../SearchUser/SearchBox";
import AddUser from "../AddUser/AddUser";
import EditTable from "./EditTable";

const EditUser = async ({ PaginationCount, PaginationData }) => {
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
          <EditTable PaginationData={PaginationData} />
          <Pagination PaginationCount={PaginationCount} />
        </section>
      </div>
    </>
  );
};

export default EditUser;
