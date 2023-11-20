import { GetUserData } from "@/app/lib/data";
import Link from "next/link";

const EditUser = async () => {
  const data = await GetUserData();
  return (
    <>
      <div className="pt-5 sm:pt-10 ">
        <section className="p-0 flex flex-col items-center justify-center">
          <div className="searchbar py-4 ">
            <div className="chat chat-start">
              <div className="chat-bubble bg-slate-100 shadow-md w-[400px] sm:w-[600px] ">
                <input
                  type="text"
                  placeholder="Search For Accounts By Their Name "
                  className="input border-transparent focus:border-transparent input-sm w-[300px] sm:w-[500px] text-[black] bg-white"
                />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <>
              <div className="overflow-x-auto">
                <table className="table text-black bg-white">
                  {/* head */}
                  <thead>
                    <tr className=" text-sm-[5px] ">
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Number</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  {data.map((preview) => (
                    <tbody>
                      <>
                        <tr>
                          <td>
                            <div className=" flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <>
                                    <img
                                      src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
                                      alt="No Img"
                                    />
                                  </>
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{preview.name}</div>
                              </div>
                            </div>
                          </td>
                          <td>{preview.email}</td>

                          <td className="">
                            {preview.role === "gym" ? (
                              <>
                                <div className="badge badge-accent text-white ">
                                  Gym
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="badge badge-secondary text-white ">
                                  Grit
                                </div>
                              </>
                            )}
                          </td>
                          <td>
                            {preview.status === "Active" ? (
                              <>
                                <div className="badge badge-success gap-2 text-white ">
                                  active
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="badge badge-error gap-2 text-white ">
                                  disable
                                </div>
                              </>
                            )}
                          </td>
                          <td>{preview.number}</td>
                          <td>
                            <Link href="/">
                              <button className="btn btn-sm hover:bg-green-500 hover:text-white bg-white  text-green-500 btn-success ">
                                Edit
                              </button>
                            </Link>
                          </td>
                          <td>
                            <form action="">
                              <input
                                type="hidden"
                                name="id"
                                value={preview.id}
                              />
                              <button className="btn btn-sm hover:bg-red-500 hover:text-white bg-white  text-red-500 btn-error ">
                                Delete
                              </button>
                            </form>
                          </td>
                        </tr>
                      </>
                    </tbody>
                  ))}
                  {/* foot */}
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                      <th>Status</th>
                      <th>Number</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditUser;
