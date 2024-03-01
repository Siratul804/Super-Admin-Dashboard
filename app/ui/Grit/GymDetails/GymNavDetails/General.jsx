const General = ({ GymSpecificData }) => {
  return (
    <>
      <div className="general p-5">
        {GymSpecificData.map((val) => (
          <>
            <section className="flex justify-between flex-wrap ">
              <div className="general_left flex-initial w-[58vh]  rounded p-5 shadow-[rgba(99,_99,_99,_0.2)_0px_2px_8px_0px] ">
                <div className="flex justify-center ">
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.logo}`}
                    alt="No Img"
                    className="rounded-full w-[22vh] h-auto"
                  />
                </div>

                <div className="flex justify-center ">
                  <div className="pt-6 w-16  ">
                    {val.status === "Active" ? (
                      <>
                        <div className=" p-0.2 bg-[#22c55e29] text-center rounded-md">
                          <p className="text-center text-sm leading-4  font-bold  text-[#118d57]  tracking-wider">
                            Active
                          </p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className=" p-0.2 bg-[#ff563029] text-center rounded-md">
                          <p className="text-center text-sm leading-4  font-bold  text-[#b71d18]  tracking-wider">
                            Disable
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="general_rightp-5 flex-0.7 flex-initial w-[78vh] rounded p-5 shadow-[rgba(99,_99,_99,_0.2)_0px_2px_8px_0px] ">
                <div className="flex justify-between text-black py-1 ">
                  <b>Name:</b>
                  <p>{val.name}</p>
                </div>
                <div className="flex justify-between text-black py-1  ">
                  <b>Address:</b>
                  <p>{val.address}</p>
                </div>
                <div className="flex justify-between text-black py-1  ">
                  <b>Email:</b>

                  <p>{val.email}</p>
                </div>
                <div className="flex justify-between text-black py-1  ">
                  <b>Phone:</b>
                  <p>{val.phone}</p>
                </div>
                <div className="flex justify-between text-black py-1 ">
                  <b>Website:</b>
                  <a href={val.website}>{val.website}</a>
                </div>
                <div className="flex justify-between text-black py-1 ">
                  <b>RegisteredSince:</b>
                  <p>{val.RegisteredSince}</p>
                </div>
              </div>
            </section>
          </>
        ))}
      </div>
    </>
  );
};

export default General;
