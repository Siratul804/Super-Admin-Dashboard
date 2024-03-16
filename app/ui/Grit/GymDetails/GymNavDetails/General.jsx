const General = ({ GymSpecificData }) => {
  return (
    <>
      <div className="py-2"></div>
      <div className="general bg-white shadow-lg pl-5 pr-5 py-16  rounded-lg   ">
        {GymSpecificData.map((val) => (
          <>
            <section className="flex justify-between flex-wrap ">
              <div className="general_left  w-[45vh]  ">
                <div className="flex justify-center ">
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.logo}`}
                    alt="No Img"
                    className="rounded-full w-[22vh] h-auto"
                  />
                </div>

                <div className="flex justify-center ">
                  <div className="pt-6  w-16  ">
                    {val.status === "Active" ? (
                      <>
                        <div className=" p-1 bg-[#22c55e29] text-center rounded-md">
                          <p className="text-center text-sm leading-4  font-bold  text-[#118d57]  tracking-wider">
                            Active
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className=" p-1 bg-[#ff563029] text-center rounded-md">
                          <p className="text-center text-sm leading-4  font-bold  text-[#b71d18]  tracking-wider">
                            Disable
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="sm:py-0 py-4 "></div>
              <div className="general_right  flex-0.7 flex-initial w-[84vh] rounded p-5  shadow-[rgba(99,_99,_99,_0.2)_0px_2px_8px_0px] ">
                <section className="flex justify-between">
                  <main>
                    <div className="text-black py-2 text-left ">
                      <b>Name:</b>
                      <p>{val.name}</p>
                    </div>
                    <div className="text-black py-2 text-left">
                      <b>Address:</b>
                      <p>{val.address}</p>
                    </div>
                    <div className="text-black py-2 text-left">
                      <b>Email:</b>

                      <p>{val.email}</p>
                    </div>
                  </main>
                  <div className="border-r-2 border-black"></div>
                  <main>
                    <div className="text-black py-2 text-left  ">
                      <b>Phone:</b>
                      <p>{val.phone}</p>
                    </div>
                    <div className="text-black py-2 text-left ">
                      <b>Website:</b>
                      <div>
                        {val.website === "" ? (
                          <>
                            <p>NaN</p>
                          </>
                        ) : (
                          <>
                            <a href={val.website}>{val.website}</a>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="text-black py-2 text-left ">
                      <b>RegisteredSince:</b>
                      <p>{val.RegisteredSince}</p>
                    </div>
                  </main>
                </section>
              </div>
            </section>
          </>
        ))}
      </div>
    </>
  );
};

export default General;
