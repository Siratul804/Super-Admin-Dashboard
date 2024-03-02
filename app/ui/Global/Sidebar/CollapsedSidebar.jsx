"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUserEdit } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";

const CollapsedSidebar = ({ data }) => {
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
                    <FaListUl size={20} />
                  </span>
                </span>
              </Link>
            </li>
          </>
        ) : (
          <>
            <div className="py-[20px]"></div>
            <div className="py-1"></div>
            <li className="pl-3 pr-3 pt-3">
              <Link href="/dashboard/gym/create">
                <span
                  className={
                    pathname === "/dashboard/gym/create"
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

            <div className="py-1"></div>
            <li className="pl-3 pr-3 pt-3">
              <Link href="/dashboard/gym/edit">
                <span
                  className={
                    pathname === "/dashboard/gym/edit"
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

            <div className="py-1"></div>

            <li className="pl-3 pr-3 pt-3">
              <Link href="/dashboard/gym/contact">
                <span
                  className={
                    pathname === "/dashboard/gym/contact"
                      ? " font-bold p-3 bg-[#00a76f14] text-md rounded-lg text-[#00a76f] flex"
                      : " font-bold p-3 hover:bg-[#00a76f14] text-md rounded-lg text-[black] flex"
                  }
                >
                  <span className="pl-1  text-sm flex ">
                    <FaListUl size={20} />
                  </span>
                </span>
              </Link>
            </li>
          </>
        )}
      </div>
    </>
  );
};

export default CollapsedSidebar;
