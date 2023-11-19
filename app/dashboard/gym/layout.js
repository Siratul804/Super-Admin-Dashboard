import { auth } from "@/app/auth";
const layout = async ({ children }) => {
  const { user } = await auth();
  return (
    <>
      {user.role === "gym" ? (
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
    </>
  );
};

export default layout;
