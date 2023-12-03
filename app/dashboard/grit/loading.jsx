const loading = () => {
  return (
    <>
      <div className="flex justify-center bg-[#EEF2F6] ">
        <div className="py-[300px] sm:py-[150px]  ">
          <div className="flex flex-col gap-6 w-42 sm:w-52 ">
            <div className="skeleton h-4 w-[300px] bg-slate-300 "></div>
            <div className="skeleton h-4 w-[300px] bg-slate-300 "></div>
            <div className="skeleton h-4 w-[300px] bg-slate-300 "></div>
            <div className="skeleton h-4 w-[300px] bg-slate-300 "></div>
            <div className="skeleton h-4 w-[300px] bg-slate-300 "></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default loading;
