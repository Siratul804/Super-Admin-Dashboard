import { auth } from "@/app/auth";
import ImageUploader from "./ImageUploader";
import { GetUserData } from "@/app/lib/data";
import Link from "next/link";
const ProfileGrit = async () => {
  const { user } = await auth();
  const data = await GetUserData();

  return (
    <>
      {/* <section className="py-8">
        <div className="">
          <h1 className="flex flex-col items-center justify-center text-[35px] font-bold font-mono ">
            USER-PROFILE
          </h1>
        </div>
        <div className="p-4 flex flex-col items-center justify-center text-center ">
          <h1 className="text-black">
            <div className="mb-5">
              <div className="flex justify-center ">
                {data.map((val) => (
                  <>
                    {val.id === user.id ? (
                      <>
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.img}`}
                          alt={val.img}
                          key={val.id}
                          className="w-[150px] h-[150px] object-cover rounded-full shadow-md"
                        />
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </div>
            </div>

            <ImageUploader id={user.id} />

            <p className="py-2">
              Name: <b>{user.name}</b>
            </p>
            <p className="py-2">
              Email: <b>{user.email}</b>
            </p>
            <p className="py-2">
              Number: <b>{user.number}</b>
            </p>
          </h1>
        </div>
      </section> */}

      <section className="">
        <h1 className="font-bold text-lg "> Profile </h1>
        <div className=" pt-3 text-sm flex  ">
          <Link
            href="/"
            className="border-b-2 hover:border-black border-slate-50 "
          >
            Dashboard
          </Link>
          <div className="p-2 "></div>
          <Link
            href="/dashboard/grit/profile"
            className="border-b-2 hover:border-black border-slate-50 "
          >
            Profile
          </Link>
          <div className="p-2 "></div>
          <p className="pl-2 text-md ">{user.name}</p>
        </div>
        {/* .....cover..... */}
        <div className="cover pt-8  ">
          <div className=" rounded-2xl  h-[200px] shadow-md bg-white   ">
            <div className=" flex justify-start pt-10 pl-5 h-[100px] rounded-t-2xl  bg-gradient-to-l from-current via-cyan-900 to-slate-500">
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
            <ImageUploader id={user.id} />
          </div>
          <div className="white_area flex justify-center mt-2 p-5">
            <div className="flex w-full">
              <div className="grid h-14 flex-grow card bg-white drop-shadow-md rounded-box place-items-center text-sm p-3 ">
                Email: {user.email}
              </div>
              <div className="divider divider-horizontal">&</div>
              <div className="grid h-14 flex-grow card bg-white drop-shadow-md rounded-box place-items-center text-sm p-3 ">
                Number : {user.number}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileGrit;
