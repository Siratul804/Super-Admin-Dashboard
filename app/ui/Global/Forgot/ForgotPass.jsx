"use client";
import { forgotPass } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const ForgotPass = () => {
  const [state, formAction] = useFormState(forgotPass, undefined);
  return (
    <>
      <div>
        <main className="login bg-slate-100 h-[100vh] sm:h-[100vh] md:h-[100vh] xl:h-[100vh]">
          <section className="flex justify-center items-center h-screen">
            <div className="card rounded-lg w-[350px] sm:w-[450px] h-[265px] bg-white text-neutral-content drop-shadow-lg">
              <div className="card-body items-center text-center">
                <div className="form-control">
                  <h1
                    className="text-[black] font-bold text-[22px] flex justify-start p-1"
                    style={{ marginTop: "-10px" }}
                  >
                    Forgot Password
                  </h1>
                  <form action={formAction}>
                    <label className="label">
                      <span className="text-[black] text-sm">Email</span>
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      required
                      className="input input-bordered input-sm w-[300px] sm:w-[400px] h-10 text-[black] bg-white"
                    />

                    <div className="py-2"></div>
                    <button
                      className="btn btn-sm btn-neutral w-full text-white "
                      type="submit"
                    >
                      Submit
                    </button>
                    <div className="flex justify-center py-2 text-red-700 ">
                      {state && state}
                    </div>
                  </form>
                </div>
                <p className="py-1 text-black text-sm">
                  Copyright © 2023 Grit Gym. All rights reserved
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ForgotPass;
