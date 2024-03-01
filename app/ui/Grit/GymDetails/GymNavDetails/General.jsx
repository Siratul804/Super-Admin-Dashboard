const General = ({ GymSpecificData }) => {
  return (
    <>
      <div className="general p-5">
        {GymSpecificData.map((val) => (
          <>
            <section className="flex justify-between ">
              <div className="general_left flex-initial w-[62vh] border rounded p-5 ">
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
              <div className="general_rightp-5 flex-0.7 flex-initial w-[82vh] border rounded p-5 ">
                <p>{val.name}</p>
              </div>
            </section>
          </>
        ))}
      </div>
    </>
  );
};

export default General;
