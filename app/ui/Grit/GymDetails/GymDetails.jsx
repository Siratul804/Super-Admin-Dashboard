import { BsFillPersonVcardFill } from "react-icons/bs";

const GymDetails = ({ GymSpecificData, id }) => {
  return (
    <>
      <div className="py-2"></div>
      <div className="p-3 bg-white shadow-lg rounded-lg">
        {GymSpecificData.map((val) => (
          <>
            <h1 className="text-black text-lg font-bold">{val.name}</h1>
          </>
        ))}
        <div className="py-5"></div>
        <section className="gym_details_nav flex flex-wrap">
          <div className="text-black text-md flex ">
            <p className="py-1 ">
              <BsFillPersonVcardFill />
            </p>
            <p className="pl-1">General</p>
          </div>
          {/* <div className="text-black text-md flex pl-4 ">
            <p className="py-1 ">
              <BsFillPersonVcardFill />
            </p>
            <p className="pl-1">General</p>
          </div>
          <div className="text-black text-md flex pl-4 ">
            <p className="py-1 ">
              <BsFillPersonVcardFill />
            </p>
            <p className="pl-1">General</p>
          </div> */}
        </section>
        <section>
          {/* need to add components which would be created by me and those componets whould be dynamically navigational */}
        </section>
      </div>
    </>
  );
};

export default GymDetails;
