"use client";
import { changePass } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { RiEdit2Fill } from "react-icons/ri";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const UpdatePass = ({ id }) => {
  const [state, formAction] = useFormState(changePass, undefined);

  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="btn text-white bg-black hover:bg-black hover:text-white btn-sm w-full  "
        disabled={pending}
      >
        {pending ? "Updating..." : "Update Password"}
      </button>
    );
  }

  const formRef = useRef();

  useEffect(() => {
    if (state?.message === "Updated") {
      document.getElementById("my_modal_3").close();
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
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <div className="hover:bg-slate-100 w-full p-1 rounded-md flex ">
            <RiEdit2Fill size={22} />
            <p className="pl-1 text-[15px] ">Change Password</p>
          </div>
        </button>

        <dialog id="my_modal_3" className="modal  ">
          <div className="modal-box bg-white ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  text-black   ">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Change Password</h3>
            <div className="py-4">
              {/* //inside content// */}

              <form action={formAction} ref={formRef}>
                <input type="hidden" name="id" value={id} />
                <input
                  placeholder="New Password"
                  name="previous"
                  className="input border-black focus:outline-black focus:border-black w-full  text-[black] bg-white "
                  required
                />
                <div className="pt-3"></div>
                <input
                  placeholder="Confirm Password"
                  name="password"
                  className="input border-black focus:outline-black focus:border-black w-full  text-[black] bg-white "
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
