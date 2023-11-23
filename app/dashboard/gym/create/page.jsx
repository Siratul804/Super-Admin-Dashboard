import CreateMember from "@/app/ui/Gym/Create/CreateMember";
import { auth } from "@/app/auth";
const Create = async () => {
  const { user } = await auth();
  return (
    <>
      <CreateMember user={user} />
    </>
  );
};

export default Create;
