"use client";
import { addUser } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { IoMdAdd } from "react-icons/io";
import toast from "react-hot-toast";

const AddGrit = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  const notify = () => {
    toast.success("Successfully Created!", {
      style: {
        background: "#228B22",
        color: "#fff",
      },
    });

    document.getElementById("add_modal").close();
  };

  function Submit() {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className="btn btn-sm btn-neutral h-[6vh] text-white w-[35vh] rounded-md "
        disabled={pending}
        onClick={notify}
      >
        {pending ? "Creating..." : "Create User"}
      </button>
    );
  }

  return (
    <div>
      <div className="flex justify-end ">
        <button
          className="btn btn-neutral btn-sm text-white "
          onClick={() => document.getElementById("add_modal").showModal()}
        >
          <IoMdAdd size={17} /> Add User
        </button>
      </div>
      {/* .....add modal data....... */}
      <dialog id="add_modal" className="modal">
        <div className="modal-box bg-white max-w-[80vh] ">
          <div className="">
            {/* //inside content// */}
            <div className="">
              <div className="flex justify-between ">
                <h1 className="text-xl  text-black ">Add Advance User</h1>
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
              <section className="flex justify-center">
                <form action={formAction}>
                  <div className="flex justify-between sm:flex-row flex-col  ">
                    <main className="pr-1">
                      <label className="label">
                        <span className="text-[black] text-sm"> Name </span>
                      </label>
                      <input
                        type="text"
                        placeholder="name"
                        name="name"
                        required
                        autocomplete="off"
                        // className="input input-sm  bg-white  text-black border-black focus:outline-black focus:border-black w-[35vh]"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                    <main className="pl-0 sm:pl-1 ">
                      <label className="label">
                        <span className="text-[black] text-sm "> Email </span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        required
                        autocomplete="off"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                  </div>

                  <div className="flex justify-between sm:flex-row flex-col  ">
                    <main className="pr-1">
                      <label className="label">
                        <span className="text-[black] text-sm ">Password</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Enter Your Password"
                        name="password"
                        required
                        autocomplete="off"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                    <main className="pb-1">
                      <label className="label">
                        <span className="text-[black] text-sm">
                          Mobaile Number{" "}
                        </span>
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Your Number"
                        name="number"
                        required
                        autocomplete="off"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                  </div>
                  <div className="flex justify-between sm:flex-row flex-col pt-4 ">
                    <main>
                      <select
                        name="status"
                        className=" h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-[35vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      >
                        <option disabled selected>
                          Select Status
                        </option>
                        <option>Active</option>
                        <option>Disable</option>
                      </select>
                    </main>
                    <main className="pt-4 sm:pt-0">
                      <Submit />
                    </main>
                  </div>

                  {/* <div>
                    {state === "Exits" ? (
                      <>
                        <h1 className="flex justify-end text-red-500 py-1 pt-5 ">
                          User Already Exits !
                        </h1>
                      </>
                    ) : (
                      <>
                        <div className="py-1"></div>
                      </>
                    )}
                  </div> */}
                  <div className="flex justify-center sm:flex-row flex-col  ">
                    <main className="hidden">
                      <label className="label">
                        <span className="text-[black] text-sm ">Type</span>
                      </label>
                      <select
                        name="role"
                        className="input  input-sm  bg-white text-black border-black focus:outline-black focus:border-black w-[35vh]"
                      >
                        <option value="grit">grit</option>
                      </select>
                    </main>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddGrit;
