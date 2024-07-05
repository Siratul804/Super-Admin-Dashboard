const View = ({ MemberSpecificData, packgaeData }) => {
  const package_id = MemberSpecificData.map((val) => val.package_id);

  const id_num = parseInt(package_id);

  return (
    <>
      <div className="py-2"></div>
      <div className="general bg-white shadow-lg rounded-lg h-auto  sm:h-[80vh] ">
        {MemberSpecificData.map((val) => (
          <>
            <section className="flex justify-evenly flex-wrap    ">
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
              <div className="general_right w-[78vh] rounded p-5 ">
                <section className="flex justify-between flex-wrap ">
                  <main>
                    <div className="text-black py-2 text-left ">
                      <b className="pr-5">Package:</b>
                      {packgaeData.map((val) => (
                        <>
                          {val.PackageID === id_num ? (
                            <>
                              <p>
                                {val.Name} - {val.DurationUnit} -{" "}
                                {val.DurationValue} -{" "}
                                {parseFloat(val.Price).toFixed(0)} Taka
                              </p>
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      ))}
                    </div>
                    <div className="text-black py-2 text-left">
                      <b className="pr-5">Member ID:</b>
                      <p>{val.member_id}</p>
                    </div>
                    <div className="text-black py-2 text-left ">
                      <b className="pr-5">Name:</b>
                      <p>{val.name}</p>
                    </div>
                    <div className="text-black py-2 text-left ">
                      <b className="pr-5">Email:</b>
                      <p>{val.email ? val.email : "#"}</p>
                    </div>
                    <div className="text-black py-2 text-left ">
                      <b className="pr-5">Phone:</b>
                      <p>{val.cell_number}</p>
                    </div>
                    <div className="text-black py-2 text-left ">
                      <b className="pr-5">Gender:</b>
                      <p>{val.gender}</p>
                    </div>
                    <div className="text-black py-2 text-left ">
                      <b className="pr-5">Country:</b>
                      <p>{val.country ? val.country : "#"}</p>
                    </div>
                  </main>

                  <main>
                    <div className="text-black py-2 text-left ">
                      <b className="pr-5">Registered Date:</b>
                      <p>{val.reg_date}</p>
                    </div>

                    <div className="text-black py-2 text-left ">
                      <b className="pr-5">Renew Date:</b>
                      <p>{val.renew_date ? val.renew_date : "#"}</p>
                    </div>

                    <div className="text-black py-2 text-left ">
                      <b className="pr-5">Blood Group:</b>
                      <p>{val.blood_group ? val.blood_group : "#"}</p>
                    </div>
                    <div className="text-black py-2 text-left ">
                      <b className="pr-5">National Id:</b>
                      <p>{val.national_id ? val.national_id : "#"}</p>
                    </div>
                    <div className="text-black py-2 text-left ">
                      <b className="pr-5">Height:</b>
                      <p>{val.height ? val.height : "#"}</p>
                    </div>
                    <div className="text-black py-2 text-left ">
                      <b className="pr-5">Weight:</b>
                      <p>{val.weight ? val.weight : "#"}</p>
                    </div>
                    <div className="text-black py-2 text-left ">
                      <b className="pr-5">Date Of Birth:</b>
                      <p>{val.date_time ? val.date_time : "#"}</p>
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

export default View;
