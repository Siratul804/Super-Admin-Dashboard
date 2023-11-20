import { auth } from "@/app/auth";
import ImageUploader from "./ImageUploader";
const ProfileGrit = async () => {
  const { user } = await auth();

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
              <img
                src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
                alt="Preview"
                className="w-[200px] h-[200px] object-cover rounded-full shadow-md"
              />
            </div>
          </div>

          <ImageUploader />

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
