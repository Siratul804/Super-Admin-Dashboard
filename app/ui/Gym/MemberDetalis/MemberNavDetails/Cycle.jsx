"use client";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { changeCycle } from "@/app/lib/actions";
import toast from "react-hot-toast";

const Cycle = ({ MemberSpecificData, packgaeData, id }) => {
  const initialState = {
    message: "",
  };

  const [state, cycleAction] = useFormState(changeCycle, initialState);

  useEffect(() => {
    if (state?.message === "Updated") {
      toast.success("Cycle Update Successfully !", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    } else if (state?.message === "Failed") {
      toast.error("Cycle Update Failed !", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    }
  }, [state]);

  function SubmitCycle() {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className=" bg-black text-white h-[6vh] w-auto p-4 sm:p-0 sm:w-[35vh] rounded-md font-bold "
        disabled={pending}
      >
        {pending ? "Changing..." : " Chagne Cycle"}
      </button>
    );
  }

  return (
    <>
      <form action={cycleAction}>
        <input type="hidden" name="id" value={id} />
        <section className="flex pt-0 sm:pt-0 justify-evenly  flex-wrap">
          <main className="">
            <label className="label">
              <span className="text-[black]">Old Billing Cycle :</span>
            </label>
            <div className=" p-2 sm:pl-4 flex items-center border h-[6vh]  border-[#8d94b0] rounded-md text-black w-auto sm:w-[55vh] ">
              {MemberSpecificData.map((i) => {
                return packgaeData.map((val) => (
                  <>
                    {val.PackageID === i.package_id ? (
                      <p key={val.PackageID} value={val.PackageID}>
                        {i.cycle_title}
                      </p>
                    ) : null}
                  </>
                ));
              })}
            </div>
          </main>
          <main className="pr-1">
            <label className="label">
              <span className="text-[black]">New Renewal Date:</span>
            </label>
            <input
              type="text"
              name="renew_date"
              value={`${new Date().toLocaleDateString()}`}
              required
              className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-auto sm:w-[55vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
            />
          </main>
        </section>
        <section className="flex py-5 justify-evenly flex-wrap">
          <main>
            <label className="label">
              <span className="text-[black] text-sm pt-1 "></span>
            </label>
            <SubmitCycle />
          </main>
        </section>
      </form>
    </>
  );
};

export default Cycle;
