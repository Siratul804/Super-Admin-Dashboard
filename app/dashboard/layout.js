import Navbar from "../ui/Global/Navbar/Navbar";
import { auth } from "@/app/auth";
import { GetAllUserData } from "@/app/lib/data";
import { signOut } from "@/app/auth";
import LeftSideBarOpen from "../ui/Global/LeftSideBarOpen/LeftSideBarOpen";
// import { GetUserData } from "@/app/lib/data";
import LogoutOnClose from "@/app/ui/Global/LogoutOnClose/LogoutOnClose";

const layout = async ({ children }) => {
  const { user } = await auth();
  const userData = await GetAllUserData();
  const ImgNav = await GetAllUserData();

  return (
    <>
      {userData.map((val) => (
        <>
          {val.id === user.id ? (
            <>
              <>
                {val.status === "Active" ? (
                  <>
                    <section className="profile">
                      <main className="flex  ">
                        <LeftSideBarOpen data={user} />

                        <div className="w-full  ">
                          <Navbar data={user} ImgNav={ImgNav} />
                          <LogoutOnClose />
                          <div className="">
                            <main className="bg-[#EEF2F6] p-3 min-h-screen">
                              {children}
                            </main>
                          </div>
                        </div>
                      </main>
                    </section>
                    {/* ................................... */}
                  </>
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
