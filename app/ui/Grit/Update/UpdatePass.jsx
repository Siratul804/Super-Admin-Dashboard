"use client";
import { changePass } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
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
  return (
    <>
      <div className="flex justify-center pt-4 ">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <label
            for="customFileInput"
            class="inline-block bg-white rounded-md border border-gray-300 sm:px-[245px] px-[90px] py-1 cursor-pointer hover:border-gray-400"
          >
            <span class="ml-3 text-gray-600 text-sm ">Change The Password</span>
          </label>
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

              <form action={formAction}>
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
