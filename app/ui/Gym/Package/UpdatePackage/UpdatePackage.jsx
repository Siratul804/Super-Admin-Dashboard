"use client";
import { useFormState, useFormStatus } from "react-dom";
import { MdModeEdit } from "react-icons/md";
import { updatePackage } from "@/app/lib/actions";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const UpdatePackage = ({
  id,
  Name,
  Description,
  Price,
  DurationValue,
  DurationUnit,
  // LastUpdateDate,
}) => {
  const [formValues, setFormValues] = useState({});

  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    // Update the form values whenever props change

    setFormValues({
      id,
      Name,
      Description,
      Price,
      DurationValue,
      DurationUnit,
      // LastUpdateDate,
    });
  }, [
    id,
    Name,
    Description,
    Price,
    DurationValue,
    DurationUnit,
    // LastUpdateDate,
  ]);

  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(updatePackage, initialState);

  useEffect(() => {
    if (state?.message === "Updated") {
      toast.success("Package Update Successfully !", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
      document.getElementById(id).close();
    } else if (state?.message === "Failed") {
      toast.error("Package Update Failed !", {
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
        {pending ? "Updating..." : "Update Package"}
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
                  <h1 className="text-xl  text-black "> Update Package</h1>
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
                        name="Name"
                        autocomplete="off"
                        defaultValue={formValues.Name || ""}
                        required
                        // className="input input-sm  bg-white  text-black border-black focus:outline-black focus:border-black w-[35vh]"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                    <main className="pl-0 sm:pl-1">
                      <label className="label">
                        <span className="text-[black] text-sm ">
                          Description
                        </span>
                      </label>
                      <input
                        type="text"
                        defaultValue={formValues.Description || ""}
                        required
                        name="Description"
                        autocomplete="off"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                  </div>

                  <div className="flex justify-between  sm:flex-row flex-col  ">
                    <main className="pb-1">
                      <label className="label">
                        <span className="text-[black] text-sm ">
                          Duration Value
                        </span>
                      </label>
                      <input
                        type="number"
                        defaultValue={formValues.DurationValue || ""}
                        required
                        name="DurationValue"
                        autocomplete="off"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                    <main>
                      <label className="label">
                        <span className="text-[black] text-sm">
                          Duration Unit
                        </span>
                      </label>
                      <select
                        name="DurationUnit"
                        required
                        value={selectedStatus || formValues.DurationUnit || ""}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className=" h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-[35vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      >
                        <option>Days</option>
                        <option>Weeks</option>
                        <option>Months</option>
                        <option>Years</option>
                      </select>
                    </main>
                  </div>

                  <div className="flex justify-between sm:flex-row flex-col">
                    <main className="pb-1">
                      <label className="label">
                        <span className="text-[black] text-sm ">Price</span>
                      </label>
                      <input
                        type="number"
                        defaultValue={formValues.Price || ""}
                        required
                        name="Price"
                        autocomplete="off"
                        className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                      />
                    </main>
                    <main>
                      <label className="label">
                        <span className="text-[black] text-sm pt-5 "></span>
                      </label>
                      <Submit />
                    </main>
                  </div>
                  <div className="flex justify-end ">
                    {state?.message === "Failed" ? (
                      <>
                        <p className="text-red-500"> Failed To Update! </p>
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

export default UpdatePackage;
