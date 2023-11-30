"use client";
import { addUser } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
const SignUp = () => {
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

  return (
    <>
      <div className="pt-5   ">
        <h1 className="flex  items-center justify-center text-[35px] font-bold font-mono ">
          ADD GRIT
        </h1>
        <section className="flex justify-center items-center pt-5 sm:pt-4  py-10  ">
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
            <div className="flex justify-center py-2 text-red-700 ">
              {state && state}
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default SignUp;
