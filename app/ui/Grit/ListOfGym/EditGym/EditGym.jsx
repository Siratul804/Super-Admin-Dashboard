import AddGym from "../AddGym/AddGym";
import Pagination from "../Pagination/Pagination";
import SearchBox from "../SearchGym/SearchBox";
import EditGymTable from "./EditGymTable";
const EditGym = ({ PaginationData, PaginationCount }) => {
  return (
    <>
      <div className="py-2"></div>
      <SearchBox />
      <div className="py-5"></div>
      <section className="bg-white w-full shadow-lg rounded-lg">
        <div className="">
          <div className="p-3 flex justify-between  ">
            <h1 className="text-lg font-bold text-black "> List Of Gym</h1>
            <AddGym />
          </div>
        </div>

        <div className="overflow-x-auto h-[44vh]">
          <EditGymTable PaginationData={PaginationData} />
        </div>

        <Pagination PaginationCount={PaginationCount} />
      </section>
    </>
  );
};

export default EditGym;
