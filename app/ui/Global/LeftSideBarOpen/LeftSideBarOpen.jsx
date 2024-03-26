"use client";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { useState } from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
import SideBar from "@/app/ui/Global/Sidebar/SideBar";
import Link from "next/link";
import CollapsedSidebar from "../Sidebar/CollapsedSidebar";
const LeftSideBarOpen = ({ data, GetGym }) => {
  const [collapsed, setCollapsed] = useState(false);

  const gymIds = GetGym.map((val) => val.id);

  const gym_id_num = data.gym_id;

  const isIdIncluded = gymIds.includes(gym_id_num);

  console.log(gym_id_num);
  console.log(gymIds);
  console.log(isIdIncluded);

  return (
    <>
      <div className="sm:block hidden">
        <div
          className=" border-r-1"
          style={{ display: "flex", height: "100%", minHeight: "400px" }}
        >
          <Sidebar
            collapsed={collapsed}
            backgroundColor="#FFFFFF"
            width="250px"
            collapsedWidth="75px"
          >
            <Menu>
              <div className="flex justify-between  pt-8">
                <div className="pl-5">
                  {collapsed ? (
                    <></>
                  ) : (
                    <>
                      {/* /////// */}

                      {isIdIncluded ? (
                        <>
                          {GetGym.filter((val) => val.id === gym_id_num).map(
                            (val) => (
                              <>
                                <div className=" flex justify-center  ml-10">
                                  <img
                                    src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.logo}`}
                                    alt="No Img"
                                    className=" h-auto w-[10vh] rounded-md "
                                  />
                                </div>
                                <div className="flex justify-center ml-10 ">
                                  <p className=" text-black mt-2 font-medium ">
                                    {val.name}
                                  </p>
                                </div>
                                <div className="pt-2 w-full ml-5 ">
                                  {/* <hr className="w-[29vh]" /> */}
                                  <div class="border-b-2 border-black"></div>
                                </div>
                              </>
                            )
                          )}
                        </>
                      ) : (
                        <>
                          <Link href="/">
                            <li className="flex">
                              <img
                                src="https://grit.com.bd/assets/img/grit_logo-black.svg"
                                className="sm:h-6 sm:w-auto "
                              />
                            </li>
                          </Link>
                        </>
                      )}

                      {/* /////// */}
                    </>
                  )}
                </div>
                <div className="">
                  {collapsed ? (
                    <>
                      <div className="pr-5">
                        <button
                          className="sb-button  bg-white border-dotted border-slate-200 border-2 hover:bg-slate-100 p-0.5 rounded-full "
                          onClick={() => setCollapsed(!collapsed)}
                        >
                          <MdChevronRight size={22} />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="pr-2">
                      <button
                        className="sb-button  bg-white border-dotted border-slate-200 border-2 hover:bg-slate-100 p-0.5 rounded-full"
                        onClick={() => setCollapsed(!collapsed)}
                      >
                        <MdChevronLeft size={22} />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {collapsed ? (
                <>
                  <ul className="">
                    <CollapsedSidebar data={data} />
                  </ul>
                </>
              ) : (
                <>
                  <ul className="">
                    <SideBar data={data} />
                  </ul>
                </>
              )}
            </Menu>
          </Sidebar>
        </div>
      </div>
      {/* ...................... */}
      <div className="sm:hidden block">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />

          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className=" p-4 w-80 min-h-full bg-white">
              {isIdIncluded ? (
                <>
                  {GetGym.filter((val) => val.id === gym_id_num).map((val) => (
                    <>
                      <section className="pt-[12vh]">
                        <div className=" flex justify-center">
                          <img
                            src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.logo}`}
                            alt="No Img"
                            className=" h-auto w-[10vh] rounded-md "
                          />
                        </div>
                        <div className="flex justify-center  ">
                          <p className=" text-black mt-2 font-medium ">
                            {val.name}
                          </p>
                        </div>
                        <div className="pt-2 w-auto ">
                          <hr className="w-auto" />
                        </div>
                      </section>
                    </>
                  ))}
                </>
              ) : (
                <>
                  <div className="pt-[14vh] ml-5 pb-5 ">
                    <Link href="/">
                      <li className="flex">
                        <img
                          src="https://grit.com.bd/assets/img/grit_logo-black.svg"
                          className="h-auto w-[12vh]"
                        />
                      </li>
                    </Link>
                  </div>
                </>
              )}
              <SideBar data={data} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideBarOpen;
