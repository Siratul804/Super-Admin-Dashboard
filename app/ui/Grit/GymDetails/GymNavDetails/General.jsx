const General = ({ GymSpecificData }) => {
  return (
    <>
      <div className="general p-5">
        {GymSpecificData.map((val) => (
          <>
            <img
              src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.logo}`}
              alt="No Img"
              className="rounded-full w-[255px] h-auto "
            />
            <div>
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
          </>
        ))}
      </div>
    </>
  );
};

export default General;
