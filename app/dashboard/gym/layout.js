import { auth } from "@/app/auth";
import { Toaster } from "react-hot-toast";
const layout = async ({ children }) => {
  const { user } = await auth();
  return (
    <>
      {user.type === "gym" && user.status === "Active" ? (
        <>
          <main>{children}</main>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-red-500 text-[150px] "> 404 Error </h1>
          </div>
        </>
      )}
      <Toaster position="bottom-right" />
    </>
  );
};

export default layout;
