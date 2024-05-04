"use client";
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { updateMember } from "@/app/lib/actions";
import toast from "react-hot-toast";
const Edit = ({ MemberSpecificData }) => {
  const [formValues, setFormValues] = useState({});

  const [selectedGender, setSelectedGender] = useState("");
  const [selectedBlood, setSelectedBlood] = useState("");

  useEffect(() => {
    if (MemberSpecificData.length > 0) {
      setFormValues(MemberSpecificData[0]); // Assuming MemberSpecificData is an array with only one item
    }
  }, [MemberSpecificData]);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

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
        className=" bg-black text-white h-[6vh] w-full rounded-md font-bold "
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
        <div className="general bg-white shadow-lg rounded-lg h-auto  sm:h-[80vh] ">
          {MemberSpecificData.map((val) => (
            <>
              <section className="flex justify-evenly flex-wrap  ">
                <div className="general_left  w-[42vh]  ">
                  <div className="flex justify-center pt-0 sm:pt-10 flex-col  ">
                    <div className="flex justify-left flex-col py-2 ">
                      <b className="text-xl py-2 text-black "> {val.name} </b>
                      {val.active_status === "Active" ? (
                        <>
                          <div className=" bg-[#22c55e29] text-center rounded-md w-[22vh] ">
                            <p className="text-sm  font-bold  text-[#118d57]">
                              Active
                            </p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className=" bg-[#ff563029] text-center rounded-md w-[22vh] ">
                            <p className="text-sm  font-bold  text-[#b71d18]">
                              Disable
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                    <img
                      src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.photo}`}
                      alt="No Img"
                      className="rounded-md w-auto h-auto"
                    />
                  </div>

                  <div className="flex justify-center text-lg text-green-600 pt-2 ">
                    <span className="  font-bold mr-2 ">Credit Balance :</span>
                    <b>{val.credit_balance}</b>
                  </div>
                  {/* <div className="flex justify-center ">
                 
                </div> */}
                </div>

                <div className="sm:py-0 py-4 "></div>
                <div className="general_right w-auto rounded p-5 ">
                  <form action={formAction}>
                    <section className="flex sm:justify-between justify-center  flex-wrap ">
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
                            value={formValues.name || ""}
                            onChange={handleChange}
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
                            value={formValues.email || ""}
                            onChange={handleChange}
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
                            name="cell_number"
                            value={formValues.cell_number || ""}
                            onChange={handleChange}
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
                            value={selectedGender || formValues.gender || ""}
                            onChange={(e) => setSelectedGender(e.target.value)}
                            className=" h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-[35vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                          >
                            <>
                              <>
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
                            value={formValues.country || ""}
                            onChange={handleChange}
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
                            value={
                              selectedBlood || formValues.blood_group || ""
                            }
                            onChange={(e) => setSelectedBlood(e.target.value)}
                            required
                            className=" h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-[35vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                          >
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
                            value={formValues.national_id || ""}
                            onChange={handleChange}
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
                            value={formValues.height || ""}
                            onChange={handleChange}
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
                            value={formValues.weight || ""}
                            onChange={handleChange}
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
                            name="date_time"
                            value={formValues.date_time || ""}
                            onChange={handleChange}
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
