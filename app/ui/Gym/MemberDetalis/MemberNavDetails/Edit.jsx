"use client";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { updateMember } from "@/app/lib/actions";
import toast from "react-hot-toast";
const Edit = ({ MemberSpecificData }) => {
  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(updateMember, initialState);

  useEffect(() => {
    if (state?.message === "Updated") {
      toast.success("User Update Successfully !", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    } else if (state?.message === "Failed") {
      toast.error("User Update Failed !", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    }
  }, [state]);

  function Submit() {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className="btn btn-sm btn-neutral text-white h-[6vh] w-full rounded-md "
        disabled={pending}
      >
        {pending ? "Updating..." : "Update Member"}
      </button>
    );
  }

  return (
    <>
      <>
        <div className="py-2"></div>
        <div className="general bg-white shadow-lg p-5 rounded-lg">
          {MemberSpecificData.map((val) => (
            <>
              <section className="flex justify-evenly flex-wrap  ">
                <div className="general_left  w-[45vh]  ">
                  <div className="flex justify-center pt-20 ">
                    <img
                      src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.photo}`}
                      alt="No Img"
                      className="rounded-md w-[35vh] h-auto"
                    />
                  </div>

                  <div className="flex justify-center text-lg text-green-600 pt-2 ">
                    <span className="  font-bold mr-2 ">Credit Balance :</span>
                    <b>{val.credit_balance}</b>
                  </div>
                </div>
                <div className="sm:py-0 py-4 "></div>
                <div className="general_right  flex-0.7 flex-initial w-[88vh] rounded p-5 ">
                  <form action={formAction}>
                    <section className="flex justify-between flex-wrap ">
                      <input type="hidden" name="id" value={val.Id} />
                      <main>
                        <main className="pr-1">
                          <label className="label">
                            <span className="text-[black] font-bold ">
                              Name :
                            </span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            defaultValue={val.name}
                            required
                            className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                          />
                        </main>
                        <main className="pr-1">
                          <label className="label">
                            <span className="text-[black] font-bold ">
                              Email :
                            </span>
                          </label>
                          <input
                            type="text"
                            name="email"
                            defaultValue={val.email}
                            required
                            className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                          />
                        </main>
                        <main className="pr-1">
                          <label className="label">
                            <span className="text-[black]  font-bold ">
                              Phone :
                            </span>
                          </label>
                          <input
                            type="text"
                            name="phone"
                            defaultValue={val.cell_number}
                            required
                            className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                          />
                        </main>
                        <main className="pr-1">
                          <label className="label">
                            <span className="text-[black]  font-bold ">
                              Gender :
                            </span>
                          </label>
                          <select
                            name="gender"
                            defaultValue={val.gender}
                            className=" h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-[35vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                          >
                            <>
                              <>
                                <option
                                  value={val.gender}
                                  className="text-slate-400"
                                >
                                  Select
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </>
                            </>
                          </select>
                        </main>
                        <main className="pr-1">
                          <label className="label">
                            <span className="text-[black]  font-bold ">
                              Country :
                            </span>
                          </label>
                          <input
                            type="text"
                            name="country"
                            defaultValue={val.country}
                            required
                            className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                          />
                        </main>
                      </main>

                      <main>
                        <main>
                          <label className="label">
                            <span className="text-[black] font-bold ">
                              Blood Group :
                            </span>
                          </label>
                          <select
                            name="blood_group"
                            required
                            className=" h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-[35vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                          >
                            <option
                              value={val.blood_group}
                              className="text-slate-400"
                            >
                              Select
                            </option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                          </select>
                        </main>
                        <main className="pr-1">
                          <label className="label">
                            <span className="text-[black] font-bold ">
                              National Id :
                            </span>
                          </label>
                          <input
                            type="text"
                            name="national_id"
                            defaultValue={val.national_id}
                            required
                            className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                          />
                        </main>

                        <main className="pr-1">
                          <label className="label">
                            <span className="text-[black] font-bold ">
                              Height :
                            </span>
                          </label>
                          <input
                            type="text"
                            name="height"
                            defaultValue={val.height}
                            required
                            className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                          />
                        </main>
                        <main className="pr-1">
                          <label className="label">
                            <span className="text-[black] font-bold ">
                              Weight :
                            </span>
                          </label>
                          <input
                            type="text"
                            name="weight"
                            defaultValue={val.weight}
                            required
                            className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                          />
                        </main>
                        <main className="pr-1">
                          <label className="label">
                            <span className="text-[black] font-bold ">
                              Date Of Birth :
                            </span>
                          </label>
                          <input
                            type="date"
                            name="date_of_birth"
                            defaultValue={val.date_of_birth}
                            required
                            className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                          />
                        </main>
                      </main>
                    </section>
                    <main>
                      <label className="label">
                        <span className="text-[black] text-sm pt-1 "></span>
                      </label>
                      <Submit />
                    </main>
                  </form>
                </div>
              </section>
            </>
          ))}
        </div>
      </>
    </>
  );
};

export default Edit;

// Gender select, Blood Group Select , Date of Birth I have to set the values with useState (this is my next task woudl be )
