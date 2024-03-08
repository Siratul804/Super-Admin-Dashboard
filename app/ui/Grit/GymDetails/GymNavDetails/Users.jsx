import SearchBox from "./Users/SearchBox";
import AddUser from "./Users/AddUser";
import Table from "./Users/Table";
import Pagination from "./Users/Pagination";

const Users = ({ GymUserData, id, PaginationCount }) => {
  // Extract gym_ids from GymUserData
  const gymIds = GymUserData.map((val) => val.gym_id);

  // Convert id to a number
  const id_num = parseInt(id);

  // Check if gymIds array includes the specified id_num
  const isIdIncluded = gymIds.includes(id_num);

  return (
    <>
      <div className="py-2"></div>
      <SearchBox />
      <div className="py-5"></div>

      <section className="bg-white w-full shadow-lg rounded-lg">
        <div className="">
          <div className="p-3 flex justify-between  ">
            <h1 className="text-lg font-bold text-black ">Gym User List</h1>
            <AddUser />
          </div>
        </div>

        <Table PaginationData={GymUserData} />

        <Pagination PaginationCount={PaginationCount} />
      </section>

      {isIdIncluded ? (
        <>
          {/* Render specific user data for the matching gym_id */}
          {GymUserData.filter((val) => val.gym_id === id_num).map((val) => (
            <div key={val.id}>
              <h1>{val.gym_id}</h1>
              <h1>{val.email}</h1>
            </div>
          ))}
        </>
      ) : (
        <p>No Data</p>
      )}
    </>
  );
};

export default Users;
