import { IoMdNotifications } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import Link from "next/link";
import { logout_user } from "@/app/lib/actions";

const Navbar = async ({ data, ImgNav }) => {
  return (
    <>
      <div className="navbar bg-white pr-5 pl-5 pt-5 sm:pr-10 sm:pl-10 drop-shadow-sm sticky top-0 ">
        <label
          htmlFor="my-drawer"
          className=" drawer-button lg:hidden pr-4 text-black "
        >
          <BiMenuAltLeft size={25} />
        </label>
        <div className="flex-1  ">
          <a className=" bg-slate-100 rounded-lg p-1.5 normal-case text-sm font-mono font-bold text-black ">
            ⌘K
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end pr-2 ">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator text-black ">
                <IoMdNotifications size={20} />
                <span className="badge badge-sm bg-white indicator-item text-black ">
                  1
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 shadow bg-white "
            >
              <div className="card-body">
                <span className="text-info">Login Success</span>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {ImgNav.map((val) => (
                  <>
                    {val.id === data.id ? (
                      <>
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.img}`}
                          alt={val.img}
                          key={val.id}
                          className="w-[200px] h-[200px] object-cover rounded-full shadow-md"
                        />
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </div>
            </label>

            <ul className="menu-sm dropdown-content z-[1] mt-3 p-2 shadow bg-white  rounded-box w-52 ">
              <Link href="/dashboard/grit/profile">
                <span className=" font-bold p-2 hover:bg-[#00a76f14] text-md rounded-lg text-[black] flex">
                  <span className="pl-1 text-slate-500 text-sm flex ">
                    <p className="px-2">Profile</p>
                  </span>
                </span>
              </Link>

              <form action={logout_user}>
                <button className="w-full">
                  <span className=" font-bold p-2 hover:bg-[#00a76f14] text-md rounded-lg text-[black] flex">
                    <span className="pl-1 text-slate-500 text-sm flex ">
                      <p className="px-2 text-red-600 ">Logout</p>
                    </span>
                  </span>
                </button>
              </form>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
