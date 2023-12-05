"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoPersonAdd } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";

const SideBar = ({ data }) => {
  const pathname = usePathname();
  return (
    <>
      <div className="font-sans ">
        {data.role === "grit" ? (
          <>
            <div className="py-[10px]"></div>

            <li className="pl-3 pr-3 pt-3">
              <Link href="/dashboard/grit/signup">
                <span
                  className={
                    pathname === "/dashboard/grit/signup"
                      ? " font-bold p-3 bg-[#00a76f14] text-md rounded-lg text-[#00a76f] flex"
                      : " font-bold p-3 hover:bg-[#00a76f14] text-md rounded-lg text-[black] flex"
                  }
                >
                  <span className="pl-1  text-sm flex ">
                    <IoPersonAdd size={20} />
                    <p className="px-3">Add Grit</p>
                  </span>
                </span>
              </Link>
            </li>
            <li className="pl-3 pr-3 pt-3">
              <Link href="/dashboard/grit/edit">
                <span
                  className={
                    pathname === "/dashboard/grit/edit"
                      ? " font-bold p-3 bg-[#00a76f14] text-md rounded-lg text-[#00a76f] flex"
                      : " font-bold p-3 hover:bg-[#00a76f14] text-md rounded-lg text-[black] flex"
                  }
                >
                  <span className="pl-1  text-sm flex ">
                    <FaUserEdit size={20} />
                    <p className="px-3">Edit Grit</p>
                  </span>
                </span>
              </Link>
            </li>
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
