const GymDetails = ({ GymSpecificData }) => {
  return (
    <>
      {GymSpecificData.map((val) => (
        <>
          <p>{val.id}</p>
          <p>{val.name}</p>
          <p>{val.address}</p>
        </>
      ))}
    </>
  );
};

export default GymDetails;
