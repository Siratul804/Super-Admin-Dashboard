"use client";
import { useFormState, useFormStatus } from "react-dom";
import { MdModeEdit } from "react-icons/md";
import { updateGym } from "@/app/lib/actions";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const UpdateGym = ({
  id,
  name,
  email,
  phone,
  address,
  logo,
  status,
  website,
  RegisteredSince,
}) => {
  const [formValues, setFormValues] = useState({});

  const [selectedStatus, setSelectedStatus] = useState("");
  useEffect(() => {
    // Update the form values whenever props change

    setFormValues({
      id,
      name,
      email,
      phone,
      address,
      logo,
      status,
      website,
      RegisteredSince,
    });
  }, [id, name, email, phone, address, logo, status, website, RegisteredSince]);

  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(updateGym, initialState);

  useEffect(() => {
    if (state?.message === "Updated") {
      toast.success("Gym Update Successfully !", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
      document.getElementById(id).close();
    } else if (state?.message === "Failed") {
      toast.error("Gym Update Failed !", {
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

  function Submit() {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className="btn btn-sm btn-neutral text-white h-[6vh] w-[35vh] rounded-md "
        disabled={pending}
      >
        {pending ? "Updating..." : "Update Gym"}
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
          <MdModeEdit size={16} color="black" />
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
                  <h1 className="text-xl  text-black "> Update Gym</h1>
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
                        name="name"
                        autocomplete="off"
                        defaultValue={formValues.name || ""}
                        required
                        // className="input input-sm  bg-white  text-black border-black focus:outline-black focus:border-black w-[35vh]"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                    <main className="pl-0 sm:pl-1">
                      <label className="label">
                        <span className="text-[black] text-sm "> Adress </span>
                      </label>
                      <input
                        type="text"
                        defaultValue={formValues.address || ""}
                        required
                        name="address"
                        autocomplete="off"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
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
                        defaultValue={formValues.phone || ""}
                        required
                        name="number"
                        autocomplete="off"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                    <main>
                      <label className="label">
                        <span className="text-[black] text-sm ">Status </span>
                      </label>
                      <select
                        name="status"
                        required
                        value={selectedStatus || formValues.status || ""}
                        onChange={(e) => setSelectedStatus(e.target.value)} // Update selectedRole when the user changes the selection
                        // className="select  select-sm  bg-white text-black border-black focus:outline-black focus:border-black w-[35vh]"
                        className=" h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-[35vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      >
                        <option>Active</option>
                        <option>Disable</option>
                      </select>
                    </main>
                  </div>
                  <div className="flex justify-between  sm:flex-row flex-col  ">
                    <main className="pb-1">
                      <label className="label">
                        <span className="text-[black] text-sm ">email</span>
                      </label>
                      <input
                        type="email"
                        defaultValue={formValues.email || ""}
                        required
                        name="email"
                        autocomplete="off"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                    <main>
                      <label className="label">
                        <span className="text-[black] text-sm ">
                          RegisteredSince
                        </span>
                      </label>
                      <input
                        type="text"
                        defaultValue={formValues.RegisteredSince || ""}
                        required
                        name="RegisteredSince"
                        autocomplete="off"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                  </div>

                  <div className="flex justify-between  sm:flex-row flex-col  ">
                    <main className="pb-1">
                      <label className="label">
                        <span className="text-[black] text-sm ">Website</span>
                      </label>
                      <input
                        type="text"
                        defaultValue={formValues.website || ""}
                        required
                        name="website"
                        autocomplete="off"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                    <main>
                      <label className="label">
                        <span className="text-[black] text-sm ">Logo</span>
                      </label>
                      <input
                        type="file"
                        name="logo"
                        accept="image/*"
                        className=" h-[6vh] w-[35vh] file-input rounded-md file-input-bordered file-input-xs bg-white boder-[1px] border-slate-400  "
                      />
                    </main>
                  </div>

                  <div className="flex justify-center sm:flex-row flex-col">
                    <main>
                      <label className="label">
                        <span className="text-[black] text-sm pt-2 "></span>
                      </label>
                      <Submit />
                    </main>
                  </div>
                  <div className="flex justify-center pt-3">
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

export default UpdateGym;
