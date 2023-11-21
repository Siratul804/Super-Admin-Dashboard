import UpdateUser from "@/app/ui/Grit/Update/UpdateUser";

const Update = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <UpdateUser id={id} />
    </div>
  );
};

export default Update;
