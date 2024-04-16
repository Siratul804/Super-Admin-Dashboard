"use client";
import { addMember } from "@/app/lib/actions";
import { IoMdAdd } from "react-icons/io";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { useEffect, useRef } from "react";

const AddMember = ({ user, packgaeData }) => {
  const gym_id = user.gym_id;

  console.log(gym_id);

  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="btn btn-sm btn-neutral text-white h-[6vh] w-[35vh] rounded-md "
        disabled={pending}
      >
        {pending ? "Creating..." : "Create Member"}
      </button>
    );
  }

  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(addMember, initialState);

  const formRef = useRef();

  useEffect(() => {
    if (state?.message === "Added") {
      document.getElementById("add_Member").close();
      formRef.current.reset();
      toast.success("Member Added Successfully !", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    } else if (state?.message === "Already Exits") {
      toast.error("Member Already Exits !", {
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
          onClick={() => document.getElementById("add_Member").showModal()}
        >
          <IoMdAdd size={17} /> Add Member
        </button>
      </div>
      {/* .....add modal data....... */}
      <dialog id="add_Member" className="modal">
        <div className="modal-box bg-white max-w-[80vh] ">
          <div className="">
            {/* //inside content// */}
            <div className="">
              <div className="flex justify-between ">
                <h1 className="text-xl  text-black ">Add Member</h1>
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
                        placeholder="Enter Name"
                        name="name"
                        required
                        autocomplete="off"
                        // className="input input-sm  bg-white  text-black border-black focus:outline-black focus:border-black w-[35vh]"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                    <main className="pb-1">
                      <label className="label">
                        <span className="text-[black] text-sm">Phone</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Phone Number"
                        name="cell_number"
                        required
                        autocomplete="off"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                  </div>

                  <div className="flex justify-between sm:flex-row flex-col  ">
                    <main>
                      <label className="label">
                        <span className="text-[black] text-sm">
                          Package Type
                        </span>
                      </label>
                      <select
                        name="package_id"
                        required
                        className=" h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-[35vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      >
                        <option value="" className="text-slate-400">
                          Select
                        </option>
                        {packgaeData.map((val) => (
                          <>
                            {val.gym_id === gym_id ? (
                              <>
                                <option value={val.PackageID}>
                                  {val.Name} - {val.DurationUnit} -
                                  {parseFloat(val.Price).toFixed(0)} Taka
                                </option>
                              </>
                            ) : (
                              <></>
                            )}
                          </>
                        ))}
                      </select>
                    </main>

                    <main>
                      <label className="label">
                        <span className="text-[black] text-sm">Gender</span>
                      </label>
                      <select
                        name="gender"
                        required
                        className=" h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-[35vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      >
                        <option value="" className="text-slate-400">
                          Select
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </main>
                  </div>
                  <div className="flex justify-between sm:flex-row flex-col  ">
                    <main>
                      <label className="label">
                        <span className="text-[black] text-sm">
                          Blood Group
                        </span>
                      </label>
                      <select
                        name="blood_group"
                        required
                        className=" h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-[35vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      >
                        <option value="" className="text-slate-400">
                          Select
                        </option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </main>

                    <main>
                      <label className="label">
                        <span className="text-[black] text-sm pt-5 "></span>
                      </label>
                      <Submit />
                    </main>
                  </div>

                  <div className="flex justify-end pt-1 ">
                    {state?.message === "Already Exits" ? (
                      <>
                        <p className="text-red-500">Something Wrong ! </p>
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="flex justify-center sm:flex-row flex-col  ">
                    <main className="hidden">
                      <label className="label">
                        <span className="text-[black] text-sm ">Gym Id</span>
                      </label>
                      <input name="gym_id" value={gym_id} />
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

export default AddMember;
