"use client";
import { addUser } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { IoMdAdd } from "react-icons/io";
const AddGrit = () => {
  const [state, formAction] = useFormState(addUser, undefined);

  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="btn btn-sm btn-neutral text-white w-[340px] sm:w-[650px]"
        disabled={pending}
      >
        {pending ? "Adding..." : "Add Grit"}
      </button>
    );
  }

  if (state === "User Added") {
    window.location.reload();
  }

  return (
    <div>
      <div className="flex justify-end ">
        <button
          className="btn btn-neutral btn-sm text-white "
          onClick={() => document.getElementById("add_modal").showModal()}
        >
          <IoMdAdd size={17} /> Add User
        </button>
      </div>
      {/* .....add modal data....... */}
      <dialog id="add_modal" className="modal">
        <div className="modal-box bg-white max-w-[120vh] ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  text-black   ">
              ✕
            </button>
          </form>

          <div className="py-2">
            {/* //inside content// */}
            <div className="">
              <h1 className="flex  items-center justify-center text-[35px] font-bold font-mono ">
                ADD-USER
              </h1>
              <section className="flex justify-center">
                <form action={formAction}>
                  <div className="flex justify-evenly sm:flex-row flex-col  ">
                    <main className="pr-1">
                      <label className="label">
                        <span className="text-[black]"> Name </span>
                      </label>
                      <input
                        type="ext"
                        placeholder="name"
                        name="name"
                        required
                        className="input border-black focus:outline-black focus:border-black  w-[350px] max-w-xs text-[black] bg-white "
                      />
                    </main>
                    <main className="pl-1">
                      <label className="label">
                        <span className="text-[black]"> Email </span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        required
                        className="input border-black focus:outline-black focus:border-black w-[350px] max-w-xs text-[black] bg-white "
                      />
                    </main>
                  </div>

                  <div className="flex justify-evenly sm:flex-row flex-col  ">
                    <main className="pr-1">
                      <label className="label">
                        <span className="text-[black] flex ">Password</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Password"
                        name="password"
                        required
                        className="input border-black focus:outline-black focus:border-black w-[350px] max-w-xs text-[black] bg-white "
                      />
                    </main>
                    <main className="pb-1">
                      <label className="label">
                        <span className="text-[black]">Mobaile Number </span>
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Your Number"
                        name="number"
                        required
                        className="input border-black focus:outline-black focus:border-black w-[350px] max-w-xs text-[black] bg-white "
                      />
                    </main>
                  </div>

                  <div className="flex justify-between sm:flex-row flex-col  ">
                    <main>
                      <label className="label">
                        <span className="text-[black]">Type</span>
                      </label>
                      <select
                        name="role"
                        className="select border-black focus:outline-black focus:border-black  w-[350px] max-w-xs bg-white text-black "
                      >
                        <option value="grit">grit</option>
                      </select>
                    </main>

                    <main>
                      <label className="label">
                        <span className="text-[black]">Status </span>
                      </label>
                      <select
                        name="status"
                        className="select border-black focus:outline-black focus:border-black w-[350px] max-w-xs bg-white text-black "
                      >
                        <option>Active</option>
                        <option>Disable</option>
                      </select>
                    </main>
                  </div>
                  <br />
                  <div className="flex justify-between ">
                    <label>
                      <Submit />
                    </label>
                  </div>
                  <div className="flex justify-center text-red-600 pt-2 ">
                    <h1 className="font-bold">{state}</h1>
                  </div>
                </form>
                {/* <button
                  className="btn btn-sm btn-neutral text-white w-[340px] sm:w-[650px]"
                  type="submit"
                  onClick={() => document.getElementById("add_modal").close()}
                >
                  Delete
                </button> */}
              </section>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddGrit;
