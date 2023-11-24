"use client";
import { addMember } from "@/app/lib/actions";
import { useFormState } from "react-dom";
const CreateMember = ({ user }) => {
  const [state, formAction] = useFormState(addMember, undefined);
  return (
    <>
      <h1 className="flex mt-5 sm:mt-10 items-center justify-center text-[35px] font-bold font-mono ">
        ADD-MEMBER
      </h1>
      <section className="flex justify-center items-center mt-5 sm:mt-4 ">
        <form action={formAction}>
          <div className="flex justify-evenly sm:flex-row flex-col  ">
            <input type="hidden" name="userID" value={user.id} />
            <main className="pr-1">
              <label className="label">
                <span className="text-[black]"> Name </span>
              </label>
              <input
                type="ext"
                placeholder="name"
                name="name"
                required
                className="input input-bordered w-[350px] max-w-xs text-[black] bg-white "
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
                className="input input-bordered w-[350px] max-w-xs text-[black] bg-white "
              />
            </main>
          </div>

          <div className="flex justify-between sm:flex-row flex-col  ">
            <main className="pb-1">
              <label className="label">
                <span className="text-[black]">Mobaile Number </span>
              </label>
              <input
                type="number"
                placeholder="Enter Your Number"
                name="number"
                required
                className="input input-bordered w-[350px] max-w-xs text-[black] bg-white "
              />
            </main>

            <main>
              <label className="label">
                <span className="text-[black]">Status </span>
              </label>
              <select
                name="status"
                className="select select-bordered w-[200px] max-w-xs bg-white text-black "
              >
                <option>Active</option>
                <option>Disable</option>
              </select>
            </main>
          </div>
          <div className="flex justify-center sm:flex-row flex-col pt-5 ">
            <input
              type="file"
              name="file"
              accept="image/png"
              className="file-input  file-input-bordered file-input-sm w-full bg-white "
            />
          </div>
          <div className="flex justify-end sm:flex-row flex-col pb-5 ">
            <b className="font-bold text-sm text-primary ">
              ( select .png & less than 1MB file )
            </b>
          </div>

          <div className="flex justify-between ">
            <label>
              <button
                className="btn btn-sm btn-neutral text-white w-[340px] sm:w-[650px]"
                type="submit"
              >
                Create Member
              </button>
            </label>
          </div>
          <div className="flex justify-center py-2 text-red-700 ">
            {state && state}
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateMember;
