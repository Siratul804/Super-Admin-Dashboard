import UpdateRole from "@/app/ui/Grit/Role/UpdateRole/UpdateRole";
import React from "react";

const EditRole = ({ params }) => {
  const { id } = params;
  return (
    <>
      <UpdateRole id={id} />
    </>
  );
};

export default EditRole;
