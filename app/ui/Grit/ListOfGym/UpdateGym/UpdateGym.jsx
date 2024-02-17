import { MdModeEdit } from "react-icons/md";
const UpdateGym = () => {
  return (
    <>
      {" "}
      <button
        className="p-2 hover:bg-slate-100 rounded-full "
        // onClick={() => document.getElementById(id).showModal()}
      >
        <MdModeEdit size={16} color="black" />
      </button>
    </>
  );
};

export default UpdateGym;
