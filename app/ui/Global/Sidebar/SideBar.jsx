import Link from "next/link";
const SideBar = ({ data }) => {
  return (
    <>
      <div className="font-sans ">
        {data.role === "grit" ? (
          <>
            <Link href="/">
              <li className="flex p-5 ">
                <img
                  src="https://grit.com.bd/assets/img/grit_logo-black.svg"
                  className="w-auto h-6"
                />
              </li>
            </Link>
            <div className="py-[20px]"></div>
            <Link href="/dashboard/grit/profile">
              <li className="p-5 hover:bg-[#f5f4f4] cursor-pointer rounded-lg">
                <span className="font-bold text-md text-[black] flex">
                  <span className="pl-1 text-slate-500 text-sm ">
                    Grit Profile
                  </span>
                </span>
              </li>
            </Link>
            <div className="py-1"></div>
            <Link href="/dashboard/grit/signup">
              <li className="p-5 hover:bg-[#f5f4f4] cursor-pointer rounded-lg">
                <span className="font-bold text-md text-[black] flex">
                  <span className="pl-1 text-slate-500 text-sm ">
                    Add Grit User
                  </span>
                </span>
              </li>
            </Link>
            <div className="py-1"></div>
            <Link href="/dashboard/grit/edit">
              <li className="p-5 hover:bg-[#f5f4f4] cursor-pointer rounded-lg">
                <span className="font-bold text-md text-[black] flex">
                  <span className="pl-1 text-slate-500 text-sm ">
                    {" "}
                    Edit Grit User
                  </span>
                </span>
              </li>
            </Link>
          </>
        ) : (
          <>
            <Link href="/">
              <li className="flex p-5 ">
                <img
                  src="https://grit.com.bd/assets/img/grit_logo-black.svg"
                  className="w-auto h-6"
                />
              </li>
            </Link>
            <div className="py-[20px]"></div>
            <Link href="/dashboard/gym/profile">
              <li className="p-5 hover:bg-[#f5f4f4] cursor-pointer rounded-lg">
                <span className="font-bold text-md text-[black] flex">
                  <span className="pl-1 text-slate-500 text-sm ">
                    Gym Profile
                  </span>
                </span>
              </li>
            </Link>
            <div className="py-1"></div>
            <Link href="/dashboard/gym/create">
              <li className="p-5 hover:bg-[#f5f4f4] cursor-pointer rounded-lg">
                <span className="font-bold text-md text-[black] flex">
                  <span className="pl-1 text-slate-500 text-sm ">
                    Create Gym Member
                  </span>
                </span>
              </li>
            </Link>
            <div className="py-1"></div>
            <Link href="/dashboard/gym/edit">
              <li className="p-5 hover:bg-[#f5f4f4] cursor-pointer rounded-lg">
                <span className="font-bold text-md text-[black] flex">
                  <span className="pl-1 text-slate-500 text-sm ">
                    {" "}
                    Edit Gym Member
                  </span>
                </span>
              </li>
            </Link>
            <div className="py-1"></div>
            <Link href="/dashboard/gym/contact">
              <li className="p-5 hover:bg-[#f5f4f4] cursor-pointer rounded-lg">
                <span className="font-bold text-md text-[black] flex">
                  <span className="pl-1 text-slate-500 text-sm ">
                    {" "}
                    Contact To Grit Team
                  </span>
                </span>
              </li>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default SideBar;
