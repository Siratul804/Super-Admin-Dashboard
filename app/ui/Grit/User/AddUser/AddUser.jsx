"use client";
import { addUser } from "@/app/lib/actions";
import { IoMdAdd } from "react-icons/io";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { useEffect, useRef } from "react";

const AddGrit = ({ roleData }) => {
  // console.log(roleData);

  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="btn btn-sm btn-neutral text-white h-[6vh] w-[35vh] sm:w-[72vh] rounded-md "
        disabled={pending}
      >
        {pending ? "Creating..." : "Create User"}
      </button>
    );
  }

  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(addUser, initialState);

  const formRef = useRef();

  useEffect(() => {
    if (state?.message === "User Added") {
      document.getElementById("add_modal").close();
      formRef.current.reset();
      toast.success("User Added Successfully !", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    } else if (state?.message === "Already Exits") {
      toast.error("User Already Exits !", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    }
  }, [state]);

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
                <form action={formAction} ref={formRef}>
                  <div className="flex justify-between sm:flex-row flex-col  ">
                    <main className="pr-1">
                      <label className="label">
                        <span className="text-[black] text-sm"> Name </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
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
                  <div className="flex justify-between sm:flex-row flex-col  ">
                    <main>
                      <label className="label">
                        <span className="text-[black] text-sm">Status</span>
                      </label>
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
                    <main>
                      <label className="label">
                        <span className="text-[black] text-sm">Role</span>
                      </label>
                      <select
                        itemType="number"
                        name="role"
                        className=" h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-[35vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      >
                        <option disabled selected>
                          Select Role
                        </option>
                        {roleData.map((val) => (
                          <>
                            {val.type === "grit" ? (
                              <>
                                <option value={val.id}>{val.name}</option>
                              </>
                            ) : (
                              <></>
                            )}
                          </>
                        ))}
                      </select>
                    </main>
                  </div>
                  <div className="flex justify-center sm:flex-row flex-col pt-5 ">
                    <main className="pt-4 sm:pt-0">
                      <Submit />
                    </main>
                  </div>

                  <div className="flex justify-end pt-1 ">
                    {state?.message === "Already Exits" ? (
                      <>
                        <p className="text-red-500"> User Already Exits ! </p>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="flex justify-center sm:flex-row flex-col  ">
                    <main className="hidden">
                      <label className="label">
                        <span className="text-[black] text-sm ">Type</span>
                      </label>
                      <select
                        name="type"
                        className="input  input-sm  bg-white text-black border-black focus:outline-black focus:border-black w-[35vh]"
                      >
                        <option value="grit">grit</option>
                      </select>
                    </main>
                    <main className="hidden">
                      <label className="label">
                        <span className="text-[black] text-sm ">Gym Id</span>
                      </label>
                      <input name="gym_id" value={0} />
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
