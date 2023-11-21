import { auth } from "@/app/auth";
import ImageUploader from "./ImageUploader";
import { GetUserData } from "@/app/lib/data";
const ProfileGrit = async () => {
  const { user } = await auth();
  const data = await GetUserData();

  return (
    <>
      <div className="py-2">
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
          <p className="py-2">
            Role: <b>{user.role}</b>
          </p>
        </h1>
      </div>
    </>
  );
};

export default ProfileGrit;
