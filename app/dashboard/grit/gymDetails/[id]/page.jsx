import GymDetails from "@/app/ui/Grit/GymDetails/GymDetails";

import { GetGymDataById } from "@/app/lib/data";

import { GetGymData } from "@/app/lib/data";

const GymInfoWithControl = async ({ params }) => {
  const { id } = params;
  const GymSpecificData = await GetGymDataById(id);

  const GymUserData = await GetGymData();

  console.log(GymUserData);
  return (
    <>
      <GymDetails
        GymSpecificData={GymSpecificData}
        GymUserData={GymUserData}
        id={id}
      />
    </>
  );
};

export default GymInfoWithControl;
