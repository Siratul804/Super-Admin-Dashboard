import Navbar from "../ui/Global/Navbar/Navbar";
import SideBar from "../ui/Global/Sidebar/SideBar";
import { auth } from "@/app/auth";
import { GetUserData } from "@/app/lib/data";
import { signOut } from "@/app/auth";

const layout = async ({ children }) => {
  const { user } = await auth();
  const userData = await GetUserData();

  return (
    <>
      {userData.map((val) => (
        <>
          {val.id === user.id ? (
            <>
              <>
                {val.status === "Active" ? (
                  <section className="profile bg-white ">
                    <div className="gym_drawer bg-white ">
                      <div className="drawer lg:drawer-open ">
                        <input
                          id="my-drawer-2"
                          type="checkbox"
                          className="drawer-toggle"
                        />
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
                ) : (
                  <>
                    <main className="login bg-slate-100 h-[100vh] sm:h-[100vh] md:h-[100vh] xl:h-[100vh]">
                      <section className="flex justify-center items-center h-screen">
                        <div className="card  justify-center items-center h-screen ">
                          <div>
                            <h1 className="text-red-500 text-[20px] sm:text-[25px] text-center ">
                              You are not allow to access the page !{" "}
                            </h1>
                          </div>
                          <div className="text-center p-5 ">
                            <form
                              action={async () => {
                                "use server";
                                await signOut();
                              }}
                            >
                              <button className="btn btn-error text-white btn-sm ">
                                Okay
                              </button>
                            </form>
                          </div>
                        </div>
                      </section>
                    </main>
                  </>
                )}
              </>
            </>
          ) : (
            <></>
          )}
        </>
      ))}
    </>
  );
};

export default layout;
