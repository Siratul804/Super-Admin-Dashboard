import AddGym from "../AddGym/AddGym";
import SearchBox from "../SearchGym/SearchBox";
import EditGymTable from "./EditGymTable";
const EditGym = ({ PaginationData }) => {
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

        <EditGymTable PaginationData={PaginationData} />

        {/* <Pagination PaginationCount={PaginationCount} /> */}
      </section>
    </>
  );
};

export default EditGym;
