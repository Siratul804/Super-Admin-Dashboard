import { auth } from "@/app/auth";
import ImageUploader from "./ImageUploader";
import { GetUserData } from "@/app/lib/data";
import Link from "next/link";
import UpdatePass from "./UpdatePass";

const ProfileGrit = async () => {
  const { user } = await auth();
  const data = await GetUserData();

  return (
    <>
      <section className="text-black">
        <h1 className="font-bold text-lg text-black "> Profile </h1>
        <div className=" pt-3 text-sm flex  ">
          <Link
            href="/"
            className="border-b-2 text-black hover:border-black border-slate-50 "
          >
            Dashboard
          </Link>
          <div className="p-2 "></div>
          <Link
            href="/dashboard/grit/profile"
            className="border-b-2 hover:border-black text-black border-slate-50 "
          >
            Profile
          </Link>
          <div className="p-2 "></div>
          <p className="pl-2 text-md text-black ">{user.name}</p>
        </div>
        {/* .....cover..... */}
        <div className="cover pt-8  ">
          <div className=" rounded-2xl  h-[34vh] shadow-md bg-white   ">
            <div className=" flex justify-start pt-10 pl-5 h-[100px] rounded-t-2xl  bg-gradient-to-r from-slate-900 to-slate-700">
              {data.map((val) => (
                <>
                  {val.id === user.id ? (
                    <>
                      <img
                        src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.img}`}
                        alt={val.img}
                        key={val.id}
                        className="w-[100px] h-[100px] object-cover rounded-full shadow-md"
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ))}

              <h1 className="text-white mt-6 ml-3 text-lg font-bold ">
                {user.name}
              </h1>
            </div>
            <div className="flex justify-center sm:justify-end p-4 flex-wrap pt-16 sm:pt-8 ">
              <ImageUploader />
              <UpdatePass />
            </div>
          </div>
          <div className=" flex justify-center mt-2 p-5">
            <div className="bg-white shadow-xl p-5 rounded-xl h-[20vh] w-[50vh] ">
              <h1 className="font-bold text-black ">About</h1>
              <p className="pt-2 text-black ">Email : {user.email}</p>
              <p className="pt-2 text-black ">Number : {user.number}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileGrit;
