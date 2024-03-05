import React from "react";

const Users = ({ GymUserData, id }) => {
  // Extract gym_ids from GymUserData
  const gymIds = GymUserData.map((val) => val.gym_id);

  // Convert id to a number
  const id_num = parseInt(id);

  // Check if gymIds array includes the specified id_num
  const isIdIncluded = gymIds.includes(id_num);

  return (
    <>
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
