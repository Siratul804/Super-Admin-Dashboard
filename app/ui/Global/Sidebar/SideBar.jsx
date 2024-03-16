"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
//grit
import { FaUserEdit } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { CgGym } from "react-icons/cg";
//gym
import { FaPeopleGroup } from "react-icons/fa6";
import { LuPackageCheck } from "react-icons/lu";
import { TbSettings } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";

const SideBar = ({ data }) => {
  const pathname = usePathname();
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
                    <p className="px-3">User</p>
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
                    <p className="px-3">Role</p>
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
                    <p className="px-3">Gym</p>
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
                    <p className="px-3">Member</p>
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
                    <p className="px-3">Package</p>
                  </span>
                </span>
              </Link>
            </li>

            <ul className="pl-3 pr-3 pt-2">
              <div className="collapse  collapse-arrow rounded-lg ">
                <input type="checkbox" />

                <div className="collapse-title collapse_title_section flex font-bold text-sm text-black  ">
                  <TbSettings size={20} />
                  <p className="px-3  ">Setting</p>
                </div>

                <div className="collapse-content ">
                  <li className="pt-3">
                    <Link href="/dashboard/gym/setting/user">
                      <span
                        className={
                          pathname === "/dashboard/gym/user"
                            ? " font-bold p-3 bg-[#00a76f14] text-md rounded-lg text-[#00a76f] flex"
                            : " font-bold hover:bg-[#00a76f14] pt-2 pb-2 text-md rounded-lg text-[black] flex"
                        }
                      >
                        <span className="pl-1 text-black  text-sm flex ">
                          <div className="py-1 ml-1">
                            <GoDotFill size={12} />
                          </div>
                          <p className="px-2 font-bold ">User</p>
                        </span>
                      </span>
                    </Link>
                  </li>

                  <li className="pt-3">
                    <Link href="/dashboard/gym/setting/role">
                      <span
                        className={
                          pathname === "/dashboard/gym/role"
                            ? " font-bold p-3 bg-[#00a76f14] text-md rounded-lg text-[#00a76f] flex"
                            : " font-bold hover:bg-[#00a76f14] pt-2 pb-2 text-md rounded-lg text-[black] flex"
                        }
                      >
                        <span className="pl-1 text-black  text-sm flex ">
                          <div className="py-1 ml-1">
                            <GoDotFill size={12} />
                          </div>
                          <p className="px-2 font-bold ">Role</p>
                        </span>
                      </span>
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default SideBar;
