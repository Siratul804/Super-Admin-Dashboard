import AddUser from "../AddUser/AddUser";
import EditTable from "./EditTable";
import SearchBox from "../SearchUser/SearchBox";

const EditUser = async ({ data, filterData }) => {
  return (
    <>
      <div className="pt-5 sm:pt-5  ">
        <SearchBox />
        <div className="py-8 flex justify-end ">
          <AddUser />
        </div>
        <section className=" p-3 bg-white w-full rounded-xl shadow-lg flex  items-center justify-center">
          <EditTable data={data} filterData={filterData} />
        </section>
      </div>
    </>
  );
};

export default EditUser;
