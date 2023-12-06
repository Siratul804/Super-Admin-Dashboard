import AddUser from "../AddUser/AddUser";
import EditTable from "./EditTable";
import SearchBox from "../SearchUser/SearchBox";
import { Toaster } from "react-hot-toast";

const EditUser = async ({ data, filterData }) => {
  return (
    <>
      <div className="pt-2 sm:pt-0  ">
        <SearchBox />
        <div className="py-5"></div>
        <section className="bg-white w-full shadow-lg p-3 rounded-lg">
          <div className="pt-2 pb-4  flex justify-between  ">
            <h1 className="text-lg font-bold">Advance User List</h1>
            <AddUser />
          </div>
          <EditTable data={data} filterData={filterData} />
        </section>
      </div>

      {/* <Toaster  position="bottom-right" reverseOrder={false} /> */}
      <Toaster
        toastOptions={{ duration: 5000 }}
        position="bottom-right"
        reverseOrder={false}
      />
    </>
  );
};

export default EditUser;
