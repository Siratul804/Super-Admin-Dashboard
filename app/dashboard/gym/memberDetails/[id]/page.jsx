const MemberDetails = async ({ params }) => {
  const { id } = params;

  console.log(id);
  return (
    <>
      MemberDetails <b>{id}</b>{" "}
    </>
  );
};

export default MemberDetails;
