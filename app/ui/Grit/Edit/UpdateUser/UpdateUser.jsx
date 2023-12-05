"use client";
import { useFormState, useFormStatus } from "react-dom";
import { MdModeEdit } from "react-icons/md";
import { updateUser } from "@/app/lib/actions";
import toast, { Toaster } from "react-hot-toast";
// import UpdatePass from "./UpdatePass";
const UpdateUser = ({ id, name, email, number, role, status }) => {
  const [state, formAction] = useFormState(updateUser, undefined);

  function Submit() {
    const { pending } = useFormStatus();
    const notify = () => toast.success("Successfully Updated!");

    return (
      <button
        type="submit"
        className="btn btn-sm btn-neutral text-white w-[340px] sm:w-[650px]"
        onClick={notify}
        disabled={pending}
      >
        {pending ? "Updating..." : "Update User"}
      </button>
    );
  }

  if (state === "User Updated") {
    window.location.reload();
  }

  return (
    <div>
      <div className="flex justify-start ">
        <button
          className="p-2 hover:bg-slate-100 rounded-full "
          onClick={() => document.getElementById(id).showModal()}
        >
          <MdModeEdit size={20} />
        </button>
      </div>
      {/* .....add modal data....... */}
      <dialog id={id} className="modal">
        <div className="modal-box bg-white max-w-[110vh] ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  text-black   ">
              ✕
            </button>
          </form>

          <div className="py-2">
            {/* //inside content// */}
            <div className="">
              <h1 className="flex  items-center justify-start text-[34px]  text-black ">
                Update User
              </h1>
              <div className="py-3">
                <hr />
              </div>
              <section className="flex justify-center items-center mt-5 sm:mt-1 ">
                <form action={formAction}>
                  <div className="flex justify-evenly sm:flex-row flex-col  ">
                    <input type="hidden" name="id" value={id} />
                    <main className="pr-1">
                      <label className="label">
                        <span className="text-[black]"> Name </span>
                      </label>
                      <input
                        type="ext"
                        placeholder="name"
                        name="name"
                        defaultValue={name}
                        required
                        className="input border-black focus:outline-black focus:border-black w-[350px] max-w-xs text-[black] bg-white "
                      />
                    </main>
                    <main className="pl-0 sm:pl-1">
                      <label className="label">
                        <span className="text-[black]"> Email </span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        defaultValue={email}
                        required
                        className="input border-black focus:outline-black focus:border-black w-[350px] max-w-xs text-[black] bg-white "
                      />
                    </main>
                  </div>

                  <div className="flex justify-evenly sm:flex-row flex-col  ">
                    <main className="pb-1">
                      <label className="label">
                        <span className="text-[black]">Mobaile Number </span>
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Your Number"
                        name="number"
                        defaultValue={number}
                        required
                        className="input border-black focus:outline-black focus:border-black w-[350px] max-w-xs text-[black] bg-white "
                      />
                    </main>
                    <main>
                      <label className="label">
                        <span className="text-[black]">Status </span>
                      </label>
                      <select
                        name="status"
                        defaultValue={status}
                        className="select border-black focus:outline-black focus:border-black w-[350px] max-w-xs bg-white text-black "
                      >
                        <option>Active</option>
                        <option>Disable</option>
                      </select>
                    </main>
                  </div>

                  <div className="flex justify-center sm:flex-row flex-col   ">
                    <main className="hidden">
                      <label className="label">
                        <span className="text-[black]">Type</span>
                      </label>
                      <select
                        name="role"
                        defaultValue={role}
                        className="select border-black focus:outline-black focus:border-black w-[350px] max-w-xs bg-white text-black "
                      >
                        <option value="grit">grit</option>
                      </select>
                    </main>
                  </div>
                  <br />
                  <div className="flex justify-between ">
                    <label>
                      <Submit />
                    </label>
                  </div>
                  <Toaster position="top-center" reverseOrder={false} />
                </form>
              </section>
              {/* <UpdatePass id={id} /> */}
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateUser;
