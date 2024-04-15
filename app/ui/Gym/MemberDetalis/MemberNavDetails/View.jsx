const View = ({ MemberSpecificData }) => {
  return (
    <>
      <div className="py-2"></div>
      <div className="general bg-white shadow-lg pl-5 pr-5 py-5   rounded-lg">
        {MemberSpecificData.map((val) => (
          <>
            <section className="flex justify-between flex-wrap  ">
              <div className="general_left  w-[45vh]  ">
                <div className="flex justify-center ">
                  <img
                    src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.photo}`}
                    alt="No Img"
                    className="rounded-full w-[22vh] h-auto"
                  />
                </div>

                {/* <div className="flex justify-center ">
                 
                </div> */}
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
                      <b>Member ID:</b>
                      <p>{val.member_id}</p>
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
                      <p>{val.cell_number}</p>
                    </div>

                    <div className="text-black py-2 text-left ">
                      <b>Blood Group:</b>
                      <p>{val.blood_group}</p>
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
