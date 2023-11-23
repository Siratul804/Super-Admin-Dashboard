import { GetMemberData } from "@/app/lib/data";
import EditMember from "@/app/ui/Gym/Edit/EditMember";
import { auth } from "@/app/auth";
const Edit = async () => {
  const { user } = await auth();
  const data = await GetMemberData();
  return (
    <>
      <EditMember data={data} user={user} />
    </>
  );
};

export default Edit;
