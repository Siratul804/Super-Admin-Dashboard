import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import EditTable from "./EditTable";

const EditUser = async ({ data }) => {
  return (
    <>
      <div className="pt-5 sm:pt-5  ">
        <div className="flex justify-center">
          <div className="bg-white shadow-sm p-5 rounded-xl sm:h-[18vh] h-[30vh] sm:w-[150vh] w-[100vh] flex justify-evenly flex-wrap">
            <div>
              <label htmlFor="">Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name "
                className="input py input-sm  bg-white text-black border-black focus:outline-black focus:border-black w-[250px] "
              />
            </div>
            <div>
              <label htmlFor="">Number</label>
              <br />
              <input
                type="number"
                placeholder="Enter Your Number "
                className="input py input-sm  bg-white text-black border-black focus:outline-black focus:border-black w-[250px] "
              />
            </div>
            <div>
              <label htmlFor="">Status</label>
              <br />
              <select className="select bg-white text-black border-black focus:outline-black focus:border-black select-sm w-[250px] ">
                <option>Active</option>
                <option>Disable</option>
              </select>
            </div>
          </div>
        </div>
        <div className="py-8 flex justify-end ">
          <Link href="/dashboard/grit/signup">
            <button className="btn btn-neutral btn-sm text-white ">
              <IoMdAdd size={17} /> Add Grit
            </button>
          </Link>
        </div>
        <section className=" p-3 bg-white w-full rounded-xl shadow-md flex  items-center justify-center">
          <EditTable data={data} />
        </section>
      </div>
    </>
  );
};

export default EditUser;
