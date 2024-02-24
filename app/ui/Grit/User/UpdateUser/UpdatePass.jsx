"use client";
import { changePass } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { IoFingerPrint } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const UpdatePass = ({ email, id }) => {
  const [formValues, setFormValues] = useState({});
  useEffect(() => {
    // Update the form values whenever props change
    setFormValues({ email, id });
  }, [email, id]);
  const [state, formAction] = useFormState(changePass, undefined);

  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="btn text-white bg-black hover:bg-black hover:text-white btn-sm h-[6vh] w-[38vh] sm:w-[72vh] "
        disabled={pending}
      >
        {pending ? "Updating..." : "Update Password"}
      </button>
    );
  }

  const formRef = useRef();

  useEffect(() => {
    if (state?.message === "Updated") {
      document.getElementById(email).close();
      formRef.current.reset();
      toast.success("Password Updated Successfully !", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    } else if (state?.message === "Failed") {
      toast.error("Password Updated Failed !", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    } else if (state?.message === "Did't Match") {
      toast.error("Password Did't Match !", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    }
  }, [state]);
  return (
    <>
      <div className="flex">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="w-full"
          onClick={() => document.getElementById(email).showModal()}
        >
          <div className="hover:bg-slate-100 w-full p-2 rounded-md flex ">
            <IoFingerPrint size={16} color="black" />
          </div>
        </button>

        <dialog id={email} className="modal  ">
          <div className="modal-box bg-white ">
            <div className="">
              <div className="flex justify-between ">
                <h1 className="text-xl  text-black ">Change Password</h1>
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
            <div className="py-4">
              {/* //inside content// */}

              <form action={formAction} ref={formRef}>
                <input type="hidden" name="id" value={formValues.id} />
                <input
                  placeholder="New Password"
                  name="previous"
                  type="password"
                  className="input border-black focus:outline-black focus:border-black btn-sm h-[6vh] w-[38vh] sm:w-[72vh] text-[black] bg-white "
                  required
                />
                <div className="pt-3"></div>
                <input
                  placeholder="Confirm Password"
                  name="password"
                  type="password"
                  className="input border-black focus:outline-black focus:border-black btn-sm h-[6vh] w-[38vh] sm:w-[72vh] text-[black] bg-white "
                  required
                />
                <div className="pt-3"></div>
                <Submit />
                <div className="flex justify-end pt-1 ">
                  {state?.message === "Did't Match" ? (
                    <>
                      <p className="text-red-500">Password Did't Match!</p>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default UpdatePass;
