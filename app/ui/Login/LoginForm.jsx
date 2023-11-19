"use client";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Link from "next/link";
import { authenticate } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [isVisible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!isVisible);
  };
  const [state, formAction] = useFormState(authenticate, undefined);
  return (
    <>
      <main className="login bg-slate-100 h-[100vh] sm:h-[100vh] md:h-[100vh] xl:h-[100vh]">
        <section className="flex justify-center items-center h-screen">
          <div className="card rounded-lg w-[350px] sm:w-[450px] h-[360px] bg-white text-neutral-content drop-shadow-lg">
            <div className="card-body items-center text-center">
              <form action={formAction}>
                <div className="form-control">
                  <h1
                    className="text-[black] font-bold text-[22px] flex justify-start p-1"
                    style={{ marginTop: "-10px" }}
                  >
                    Sign In
                  </h1>
                  <div></div>
                  <label className="label">
                    <span className="text-[black] text-sm">Email</span>
                  </label>
                  <label className="">
                    <input
                      className="input input-bordered input-sm w-[300px] sm:w-[400px] h-10 text-[black] bg-white"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </label>
                  <label className="label">
                    <span className="text-[black] text-sm">Password</span>
                    <span className="icon pl-1 " onClick={toggle}>
                      {isVisible ? (
                        <AiFillEye size={20} />
                      ) : (
                        <AiFillEyeInvisible size={20} />
                      )}
                    </span>
                  </label>
                  <label className="">
                    <input
                      type={!isVisible ? "password" : "text"}
                      className="input input-bordered input-sm w-[300px] sm:w-[400px] h-10 text-[black] bg-white"
                      name="password"
                      placeholder="Enter password"
                      required
                    />
                  </label>
                  <div className="flex justify-end">
                    <Link
                      href="/forgot"
                      className="text-[red] text-[12px]  pt-1"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <br />
                  <button className="btn btn-sm btn-neutral" type="submit">
                    Sign In
                  </button>
                </div>
                {state === "CredentialsSignin" ? (
                  <>
                    <b className="text-red-500"> Wrong Crendentials </b>
                  </>
                ) : (
                  <></>
                )}
                <p className="py-2 text-black text-sm">
                  Copyright © 2023 Grit Gym. All rights reserved
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LoginForm;
