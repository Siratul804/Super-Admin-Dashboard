"use client";
import { useFormState, useFormStatus } from "react-dom";
import { MdModeEdit } from "react-icons/md";
import { updateUser } from "@/app/lib/actions";
import toast from "react-hot-toast";
// import UpdatePass from "./UpdatePass";
const UpdateUser = ({ id, name, email, number, role, status }) => {
  const [state, formAction] = useFormState(updateUser, undefined);

  function Submit() {
    const { pending } = useFormStatus();
    if (state === "Updated") {
      toast.dismiss();
      toast("Successfully Updated!", {
        icon: "👏",
      });

      document.getElementById(id).close();
    }

    return (
      <button
        type="submit"
        className="btn btn-sm btn-neutral text-white w-[35vh] rounded-md "
        disabled={pending}
      >
        {pending ? "Updating..." : "Update User"}
      </button>
    );
  }

  return (
    <div>
      <div className="flex justify-start ">
        <button
          className="p-2 hover:bg-slate-100 rounded-full "
          onClick={() => document.getElementById(id).showModal()}
        >
          <MdModeEdit size={20} color="black" />
        </button>
      </div>
      {/* .....add modal data....... */}
      <dialog id={id} className="modal">
        <div className="modal-box bg-white max-w-[80vh] ">
          <div className="py-2">
            {/* //inside content// */}
            <div className="">
              <div className="">
                <div className="flex justify-between ">
                  <h1 className="text-xl  text-black "> Update User</h1>
                  <div>
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-4  text-black   ">
                        ✕
                      </button>
                    </form>
                  </div>
                </div>
                <div className="py-3">
                  <hr />
                </div>
              </div>
              <section className="flex justify-center">
                <form action={formAction}>
                  <div className="flex justify-between sm:flex-row flex-col  ">
                    <input type="hidden" name="id" value={id} />
                    <main className="pr-1">
                      <label className="label">
                        <span className="text-[black]  text-sm"> Name </span>
                      </label>
                      <input
                        type="text"
                        placeholder="name"
                        name="name"
                        defaultValue={name}
                        required
                        autocomplete="off"
                        // className="input input-sm  bg-white  text-black border-black focus:outline-black focus:border-black w-[35vh]"
                        className=" input  input-sm bg-[#FFFFFF] appearance-none border-2 border-black rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                    <main className="pl-0 sm:pl-1">
                      <label className="label">
                        <span className="text-[black] text-sm "> Email </span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        defaultValue={email}
                        required
                        autocomplete="off"
                        className=" input  input-sm bg-[#FFFFFF] appearance-none border-2 border-black rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                  </div>

                  <div className="flex justify-between  sm:flex-row flex-col  ">
                    <main className="pb-1">
                      <label className="label">
                        <span className="text-[black] text-sm ">
                          Mobaile Number{" "}
                        </span>
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Your Number"
                        name="number"
                        defaultValue={number}
                        autocomplete="off"
                        className=" input  input-sm bg-[#FFFFFF] appearance-none border-2 border-black rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                    <main>
                      <label className="label">
                        <span className="text-[black] text-sm ">Status </span>
                      </label>
                      <select
                        name="status"
                        defaultValue={status}
                        // className="select  select-sm  bg-white text-black border-black focus:outline-black focus:border-black w-[35vh]"
                        className=" select select-sm bg-[#FFFFFF] appearance-none border-2 border-black rounded-md w-[35vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      >
                        <option>Active</option>
                        <option>Disable</option>
                      </select>
                    </main>
                  </div>

                  <div className="flex justify-center sm:flex-row flex-col   ">
                    <main className="hidden">
                      <label className="label">
                        <span className="text-[black]">Type</span>
                      </label>
                      <select
                        name="role"
                        defaultValue={role}
                        // className="select border-black focus:outline-black focus:border-black w-[350px] max-w-xs bg-white text-black "
                        className=" select select-sm bg-[#FFFFFF] appearance-none border-2 border-black rounded-md w-[35vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      >
                        <option value="grit">grit</option>
                      </select>
                    </main>
                  </div>
                  <br />
                  <div className="flex justify-center ">
                    <label>
                      <Submit />
                    </label>
                  </div>
                </form>
              </section>
              {/* <UpdatePass id={id} /> */}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateUser;
