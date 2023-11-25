import ResetPass from "@/app/ui/Global/Reset/ResetPass";

const Reset = ({ params }) => {
  const { id, token } = params;
  return (
    <>
      <ResetPass id={id} token={token} />
    </>
  );
};

export default Reset;
