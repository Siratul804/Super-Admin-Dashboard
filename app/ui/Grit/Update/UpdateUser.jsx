"use client";
import { updateUser } from "@/app/lib/actions";
import { GetUserByIdToUpdate } from "@/app/lib/data";
import UpdatePass from "./UpdatePass";
import { useFormStatus } from "react-dom";
const UpdateUser = async ({ id }) => {
  const user = await GetUserByIdToUpdate(id);

  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="btn btn-sm btn-neutral text-white w-[340px] sm:w-[650px]"
        disabled={pending}
      >
        {pending ? "Updating..." : "Update Grit"}
      </button>
    );
  }

  return (
    <>
      <h1 className="flex mt-5 sm:mt-10 items-center justify-center text-[35px] font-bold font-mono ">
        UPDATE-GRIT
      </h1>
      <section className="flex justify-center items-center mt-5 sm:mt-4 ">
        <form action={updateUser}>
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
                defaultValue={user.name}
                required
                className="input border-black focus:outline-black focus:border-black w-[350px] max-w-xs text-[black] bg-white "
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
                defaultValue={user.email}
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
                defaultValue={user.number}
                required
                className="input border-black focus:outline-black focus:border-black w-[350px] max-w-xs text-[black] bg-white "
              />
            </main>
            <main className="pb-1">
              <label className="label">
                <span className="text-[black]"> Password</span>
              </label>
              <input
                type="password"
                disabled
                placeholder="**********"
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
                defaultValue={user.role}
                className="select border-black focus:outline-black focus:border-black w-[350px] max-w-xs bg-white text-black "
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
                defaultValue={user.status}
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
        </form>
      </section>

      <UpdatePass id={id} />
    </>
  );
};

export default UpdateUser;
