"use client";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { useState } from "react";
import { Sidebar, Menu } from "react-pro-sidebar";
import SideBar from "@/app/ui/Global/Sidebar/SideBar";
const LeftSideBarOpen = ({ data }) => {
  const [collapsed, setCollapsed] = useState(false);
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
            width="280px"
            collapsedWidth="120px"
          >
            <Menu>
              <div className="flex justify-end pt-8 pr-6  ">
                {collapsed ? (
                  <>
                    <button
                      className="sb-button  bg-white border-dotted border-slate-200 border-2 hover:bg-slate-100 p-0.5 rounded-full "
                      onClick={() => setCollapsed(!collapsed)}
                    >
                      <MdChevronRight size={22} />
                    </button>
                  </>
                ) : (
                  <button
                    className="sb-button  bg-white border-dotted border-slate-200 border-2 hover:bg-slate-100 p-0.5 rounded-full"
                    onClick={() => setCollapsed(!collapsed)}
                  >
                    <MdChevronLeft size={22} />
                  </button>
                )}
              </div>
              <ul className="">
                <SideBar data={data} />
              </ul>
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
              <SideBar data={data} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideBarOpen;
