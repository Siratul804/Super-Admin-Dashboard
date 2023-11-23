import UpdateMember from "@/app/ui/Gym/update/UpdateMember";

const Update = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <UpdateMember id={id} />
    </div>
  );
};

export default Update;
