const Package = ({ id, packgaeData, user }) => {
  const gym_id = user.gym_id;

  console.log(gym_id);

  return (
    <>
      <div className="py-2"></div>
      <div className="package bg-white shadow-lg rounded-lg h-auto py-5  sm:h-[80vh] ">
        <form action="">
          <input type="hidden" name="id" value={id} />
          <section className="flex pt-0 sm:pt-5 justify-evenly  flex-wrap">
            <main className="pr-1">
              <label className="label">
                <span className="text-[black]  ">New Package :</span>
              </label>
              <select
                name="gender"
                className=" h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-auto sm:w-[55vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
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
                className=" h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-auto sm:w-[55vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
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
          <section className="flex pt-0 sm:pt-5 justify-center flex-wrap">
            // need to deal with the specific pacagke
          </section>
        </form>
      </div>
    </>
  );
};

export default Package;
