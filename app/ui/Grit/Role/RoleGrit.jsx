"use client";
import { addRole } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
const RoleGrit = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggleChange = () => {
    setToggle(!toggle);
  };

  const handleCheckboxChange = (e) => {
    if (toggle) {
      e.preventDefault();
    }
  };

  //

  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="btn btn-neutral btn-sm text-white h-[2vh] w-full"
        disabled={pending}
      >
        {pending ? "Creating..." : "Create Role"}
      </button>
    );
  }

  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(addRole, initialState);

  const formRef = useRef();

  useEffect(() => {
    if (state?.message === "role Added") {
      formRef.current.reset();
      toast.success("Role Added Successfully !", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    } else if (state?.message === "role error") {
      toast.error("Role Added Failed !", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    }
  }, [state]);

  return (
    <>
      <div className="py-2"></div>
      <section className="bg-white w-full shadow-lg rounded-lg">
        <form action={formAction} ref={formRef}>
          <div className="p-3 rounded-lg flex justify-center sm:justify-between flex-wrap">
            <div>
              <label className="text-sm text-black ">Name </label>
              <br />
              <input
                type="text"
                placeholder="Enter Role Name "
                name="name"
                required
                autoComplete="off"
                className="input h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] sm:w-[78vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
              />
            </div>
            <div>
              <label className="text-sm text-black ">Description </label>
              <br />
              <input
                type="text"
                placeholder="Enter Role Description "
                name="description"
                required
                autoComplete="off"
                className="input h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] sm:w-[78vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
              />
            </div>
          </div>
          <div className="p-3">
            <h1 className="text-lg font-bold text-black ">
              Which permissions do you like to include in this role ?
            </h1>
          </div>
          <div className="p-3">
            <div className="">
              <div className="py-2">
                <input
                  type="checkbox"
                  checked={toggle}
                  onChange={handleToggleChange}
                  className="toggle"
                />
              </div>
              <label className="flex">
                <input
                  type="checkbox"
                  name="create"
                  className="checkbox checkbox-sm"
                  onChange={handleCheckboxChange}
                  disabled={toggle}
                />
                <span className="label-text  pl-5 text-black ">Create</span>
              </label>
              <div className="py-2"></div>
              <label className=" flex ">
                <input
                  type="checkbox"
                  name="edit"
                  className="checkbox checkbox-sm"
                  onChange={handleCheckboxChange}
                  disabled={toggle}
                />
                <span className="label-text  pl-5 text-black ">Edit</span>
              </label>
              <div className="py-2"></div>
              <label className=" flex ">
                <input
                  type="checkbox"
                  name="view"
                  className="checkbox checkbox-sm  "
                  onChange={handleCheckboxChange}
                  disabled={toggle}
                />
                <span className="label-text  pl-5 text-black ">View</span>
              </label>
            </div>
            <div className="pt-4">
              <Submit />
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default RoleGrit;
