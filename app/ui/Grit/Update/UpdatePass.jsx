"use client";
import { changePass } from "@/app/lib/actions";
import { useFormState } from "react-dom";
const UpdatePass = ({ id }) => {
  const [state, formAction] = useFormState(changePass, undefined);
  return (
    <>
      <div className="flex justify-center pt-10 ">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <span
          className="bg-white text-green-500 cursor-pointer text-lg font-serif "
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Change The Password 👈🏻
        </span>

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

              <form action={formAction}>
                <input type="hidden" name="id" value={id} />
                <input
                  placeholder="New Password"
                  name="previous"
                  className="input input-bordered w-full  text-[black] bg-white "
                  required
                />
                <div className="pt-3"></div>
                <input
                  placeholder="Confirm Password"
                  name="password"
                  className="input input-bordered w-full  text-[black] bg-white "
                  required
                />
                <div className="pt-3"></div>
                <button className="btn text-white bg-black hover:bg-black hover:text-white btn-sm w-full  ">
                  Update Password
                </button>
              </form>
              <div className="toast toast-center ">
                <span className="text-red-500 text-[12px] ">
                  {state && state}
                </span>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default UpdatePass;
