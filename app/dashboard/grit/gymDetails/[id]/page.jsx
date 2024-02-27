import GymDetails from "@/app/ui/Grit/GymDetails/GymDetails";

import { GetGymDataById } from "@/app/lib/data";

const GymInfoWithControl = async ({ params }) => {
  const { id } = params;
  const GymSpecificData = await GetGymDataById(id);
  return (
    <>
      <GymDetails GymSpecificData={GymSpecificData} id={id} />
    </>
  );
};

export default GymInfoWithControl;
