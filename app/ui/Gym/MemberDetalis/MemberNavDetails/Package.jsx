const Package = ({ id, packgaeData, user, MemberSpecificData }) => {
  const gym_id = user.gym_id;

  console.log(gym_id);

  function SubmitPackage() {
    // const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className=" bg-black text-white h-[6vh] w-auto p-4 sm:p-0 sm:w-[35vh] rounded-md font-bold "
        // disabled={pending}
      >
        {/* {pending ? "Updating..." : "Update Member"} */}
        Chagne Package
      </button>
    );
  }
  function SubmitCycle() {
    // const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className=" bg-black text-white h-[6vh] w-auto p-4 sm:p-0 sm:w-[35vh] rounded-md font-bold "
        // disabled={pending}
      >
        {/* {pending ? "Updating..." : "Update Member"} */}
        Chagne Cycle
      </button>
    );
  }

  return (
    <>
      <div className="py-2"></div>
      <div className="package bg-white shadow-lg rounded-lg h-auto py-5  sm:h-[80vh] ">
        <form action="">
          <input type="hidden" name="id" value={id} />
          <section className="flex pt-0 sm:pt-0 justify-evenly  flex-wrap">
            <main className="pr-1">
              <label className="label">
                <span className="text-[black]  ">New Package :</span>
              </label>
              <select
                name="gender"
                className="input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-auto sm:w-[55vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
              >
                <option value="" className="text-slate-400">
                  Select
                </option>
                {packgaeData.map((val) => (
                  <>
                    {val.gym_id === gym_id ? (
                      <>
                        <option value={val.PackageID}>
                          {val.Name} - {val.DurationUnit} -
                          {parseFloat(val.Price).toFixed(0)} Taka
                        </option>
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </select>
            </main>
            <main className="pr-1">
              <label className="label">
                <span className="text-[black]  ">Billing Status :</span>
              </label>
              <select
                name="status"
                className="input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-auto sm:w-[55vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
              >
                <>
                  <option value="" className="text-slate-400">
                    Select
                  </option>
                  <option>Active</option>
                  <option>Disable</option>
                </>
              </select>
            </main>
          </section>
          <section className="flex pt-0 sm:pt-5 justify-evenly flex-wrap">
            <main className="pr-1">
              <label className="label">
                <span className="text-[black]">Current Pakcage:</span>
              </label>
              <div className=" p-2 sm:pl-4 flex items-center border h-[6vh]  border-[#8d94b0] rounded-md text-black w-auto sm:w-[55vh] ">
                {MemberSpecificData.map((i) => {
                  return packgaeData.map((val) => (
                    <>
                      {val.PackageID === i.package_id ? (
                        <p key={val.PackageID} value={val.PackageID}>
                          {val.Name} - {val.DurationUnit} -{" "}
                          {parseFloat(val.Price).toFixed(0)} Taka
                        </p>
                      ) : null}
                    </>
                  ));
                })}
              </div>
            </main>

            <div className="flex flex-wrap justify-center ">
              <main className="">
                <label className="label">
                  <span className="text-[black]">Add Credit :</span>
                </label>
                <input
                  type="number"
                  name="credit"
                  required
                  className=" input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-auto sm:w-[27vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                />
              </main>
              <main className="pl-2">
                <label className="label">
                  <span className="text-[black]">Pin Number :</span>
                </label>
                <input
                  type="number"
                  name="pin_number"
                  required
                  className="input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-auto sm:w-[27vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                />
              </main>
            </div>
          </section>
          <section className="flex py-5 justify-evenly flex-wrap">
            <main>
              <label className="label">
                <span className="text-[black] text-sm pt-1 "></span>
              </label>
              <SubmitPackage />
            </main>
          </section>
        </form>

        {/* //cycle// */}

        <form action="">
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
      </div>
    </>
  );
};

export default Package;
