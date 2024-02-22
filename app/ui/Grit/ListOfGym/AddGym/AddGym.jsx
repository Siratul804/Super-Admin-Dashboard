"use client";
import { addGym } from "@/app/lib/actions";
import { IoMdAdd } from "react-icons/io";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { useEffect, useRef } from "react";

const AddGym = ({}) => {
  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="btn btn-sm btn-neutral text-white h-[6vh] w-[35vh] rounded-md "
        disabled={pending}
      >
        {pending ? "Creating..." : "Create Gym"}
      </button>
    );
  }

  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(addGym, initialState);

  const formRef = useRef();

  useEffect(() => {
    if (state?.message === "Gym Added") {
      document.getElementById("add_modal").close();
      formRef.current.reset();
      toast.success("Gym Added Successfully !", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    } else if (state?.message === "Gym Added Failed") {
      toast.error("Failed To Add Gym !", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    } else if (state?.message === "File Did't Match") {
      toast.error("File size is large! (image has to be less then 1MB)", {
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
          <IoMdAdd size={17} /> Add Gym
        </button>
      </div>
      {/* .....add modal data....... */}
      <dialog id="add_modal" className="modal">
        <div className="modal-box bg-white max-w-[80vh] ">
          <div className="">
            {/* //inside content// */}
            <div className="">
              <div className="flex justify-between ">
                <h1 className="text-xl  text-black ">Add Gym</h1>
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
                        <span className="text-[black] text-sm">
                          {" "}
                          Name of the Gym{" "}
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Name of the Gym "
                        name="name"
                        required
                        autocomplete="off"
                        // className="input input-sm  bg-white  text-black border-black focus:outline-black focus:border-black w-[35vh]"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                    <main className="pr-0">
                      <label className="label">
                        <span className="text-[black] text-sm"> Address </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Address"
                        name="address"
                        required
                        autocomplete="off"
                        // className="input input-sm  bg-white  text-black border-black focus:outline-black focus:border-black w-[35vh]"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                  </div>

                  <div className="flex justify-between sm:flex-row flex-col  ">
                    <main className="pl-0  ">
                      <label className="label">
                        <span className="text-[black] text-sm "> Email </span>
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        name="email"
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
                        placeholder="Phone Number"
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
                        <span className="text-[black] text-sm">Logo</span>
                      </label>
                      <input
                        type="file"
                        name="logo"
                        required
                        accept="image/*"
                        className=" h-[6vh] w-[35vh] file-input rounded-md file-input-bordered file-input-xs bg-white boder-[1px] border-slate-400  "
                      />
                    </main>
                  </div>
                  <div className="flex justify-between sm:flex-row flex-col">
                    <main className="">
                      <label className="label">
                        <span className="text-[black] text-sm">
                          {" "}
                          Website (optional){" "}
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Website (optional)"
                        name="website"
                        autocomplete="off"
                        // className="input input-sm  bg-white  text-black border-black focus:outline-black focus:border-black w-[35vh]"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                    <main className="">
                      <label className="label">
                        <span className="text-[black] text-sm pt-5 "></span>
                      </label>
                      <Submit />
                    </main>
                  </div>
                  <div className="flex justify-end ">
                    {state?.message === "File Did't Match" ? (
                      <>
                        <p className="text-red-500">
                          {" "}
                          File size is large! (image has to be less then 1MB){" "}
                        </p>
                      </>
                    ) : (
                      <></>
                    )}
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

export default AddGym;
