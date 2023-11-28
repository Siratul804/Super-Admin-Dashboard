import { auth } from "@/app/auth";
import ImageUploader from "./ImageUploader";
import { GetUserData } from "@/app/lib/data";
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

      <section>
        <main className="p-[80px] bg-black ">
          <div className=" m-1  absolute ">
            {data.map((val) => (
              <>
                {val.id === user.id ? (
                  <>
                    <img
                      src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.img}`}
                      alt={val.img}
                      key={val.id}
                      className="w-[120px] h-[120px] object-cover rounded-full shadow-md"
                    />
                  </>
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>

          <h1 className="text-white ml-[140px] text-lg absolute mt-[40px] font-bold ">
            {user.name}
          </h1>
        </main>
      </section>
    </>
  );
};

export default ProfileGrit;
