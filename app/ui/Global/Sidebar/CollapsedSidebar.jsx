"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
//grit
import { FaUserEdit } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { FaUserLock } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
//gym
import { FaPeopleGroup } from "react-icons/fa6";
import { LuPackageCheck } from "react-icons/lu";
import { TbSettings } from "react-icons/tb";
import { useState } from "react";

const CollapsedSidebar = ({ data }) => {
  const pathname = usePathname();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div className="font-sans ">
        {data.type === "grit" ? (
          <>
            <div className="py-[10px]"></div>
            <li className="pl-3 pr-3 pt-3">
              <Link href="/dashboard/grit/userList">
                <span
                  className={
                    pathname === "/dashboard/grit/userList"
                      ? " font-bold p-3 bg-[#00a76f14] text-md rounded-lg text-[#00a76f] flex"
                      : " font-bold p-3 hover:bg-[#00a76f14] text-md rounded-lg text-[black] flex"
                  }
                >
                  <span className="pl-1  text-sm flex ">
                    <FaUserEdit size={20} />
                  </span>
                </span>
              </Link>
            </li>
            <li className="pl-3 pr-3 pt-3">
              <Link href="/dashboard/grit/roleList">
                <span
                  className={
                    pathname === "/dashboard/grit/roleList"
                      ? " font-bold p-3 bg-[#00a76f14] text-md rounded-lg text-[#00a76f] flex"
                      : " font-bold p-3 hover:bg-[#00a76f14] text-md rounded-lg text-[black] flex"
                  }
                >
                  <span className="pl-1  text-sm flex ">
                    <FaUserCog size={20} />
                  </span>
                </span>
              </Link>
            </li>
            <li className="pl-3 pr-3 pt-3">
              <Link href="/dashboard/grit/listOfGym">
                <span
                  className={
                    pathname === "/dashboard/grit/listOfGym"
                      ? " font-bold p-3 bg-[#00a76f14] text-md rounded-lg text-[#00a76f] flex"
                      : " font-bold p-3 hover:bg-[#00a76f14] text-md rounded-lg text-[black] flex"
                  }
                >
                  <span className="pl-1  text-sm flex ">
                    <CgGym size={20} />
                  </span>
                </span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <div className="py-[10px]"></div>
            <li className="pl-3 pr-3 pt-3">
              <Link href="/dashboard/gym/member">
                <span
                  className={
                    pathname === "/dashboard/gym/member"
                      ? " font-bold p-3 bg-[#00a76f14] text-md rounded-lg text-[#00a76f] flex"
                      : " font-bold p-3 hover:bg-[#00a76f14] text-md rounded-lg text-[black] flex"
                  }
                >
                  <span className="pl-1  text-sm flex ">
                    <FaPeopleGroup size={20} />
                  </span>
                </span>
              </Link>
            </li>
            <li className="pl-3 pr-3 pt-3">
              <Link href="/dashboard/gym/package">
                <span
                  className={
                    pathname === "/dashboard/gym/package"
                      ? " font-bold p-3 bg-[#00a76f14] text-md rounded-lg text-[#00a76f] flex"
                      : " font-bold p-3 hover:bg-[#00a76f14] text-md rounded-lg text-[black] flex"
                  }
                >
                  <span className="pl-1  text-sm flex ">
                    <LuPackageCheck size={20} />
                  </span>
                </span>
              </Link>
            </li>
            <li className="pl-3 pr-3 pt-3">
              <button onClick={() => setIsHovering(!isHovering)}>
                <span
                  className={
                    pathname.includes("/user") || pathname.includes("/role")
                      ? " font-bold p-3 bg-[#00a76f14] text-md rounded-lg text-[#00a76f] flex"
                      : " font-bold p-3 hover:bg-[#00a76f14] text-md rounded-lg text-[black] flex"
                  }
                >
                  <span className="pl-1  text-sm flex ">
                    {" "}
                    <TbSettings size={20} />
                  </span>
                </span>
              </button>
            </li>
            <li className="">
              {isHovering && (
                <ul className="absolute left-3 bg-white border border-gray-300 p-2 rounded shadow">
                  <Link href="/dashboard/gym/setting/user">
                    <li
                      className={
                        pathname === "/dashboard/gym/setting/user"
                          ? "bg-gray-100 cursor-pointer text-black p-2 "
                          : "hover:bg-gray-100 cursor-pointer text-black p-2 "
                      }
                    >
                      <FaUserFriends size={16} />
                    </li>
                  </Link>
                  <div className="py-1"></div>
                  <Link href="/dashboard/gym/setting/role">
                    <li
                      className={
                        pathname === "/dashboard/gym/setting/role"
                          ? "bg-gray-100 cursor-pointer text-black p-2 "
                          : "hover:bg-gray-100 cursor-pointer text-black p-2 "
                      }
                    >
                      <FaUserLock size={16} />
                    </li>
                  </Link>
                </ul>
              )}
            </li>
          </>
        )}
      </div>
    </>
  );
};

export default CollapsedSidebar;
