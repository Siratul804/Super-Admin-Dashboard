import Navbar from "../ui/Navbar/Navbar";
import SideBar from "../ui/Sidebar/SideBar";
import { auth } from "@/app/auth";

const layout = async ({ children }) => {
  const { user } = await auth();
  return (
    <>
      <section className="profile bg-white ">
        <div className="gym_drawer bg-white ">
          <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col bg-[white] ">
              {/* navbar */}
              <Navbar data={user} />
              {/* //navbar */}
              {/* ........................ */}
              {/* Page content here */}
              <main>{children}</main>
              {/* Page content here */}
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              {/* Sidebar content here */}
              <ul className="p-4 w-[280px] min-h-full bg-white  text-base-content border-dashed border-r-2 border-slate-200  ">
                <SideBar data={user} />
              </ul>
              {/* Sidebar content here */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default layout;
