import { deleteUser } from "@/app/lib/actions";
import Link from "next/link";
import SearchBoxName from "./SearchBoxName";
import SearchBoxStatus from "./SearchBoxStatus";
import SearchBoxRole from "./SearchBoxRole";
import { IoPersonAddSharp } from "react-icons/io5";

const EditUser = async ({ data }) => {
  return (
    <>
      <div className="pt-5 sm:pt-5  ">
        <div className="flex justify-evenly flex-wrap">
          <SearchBoxName data={data} />
          <SearchBoxStatus data={data} />
          <SearchBoxRole data={data} />
        </div>
        <div className="flex justify-end flex-wrap mr-8 sm:mr-[130px] py-5 ">
          <Link href="/dashboard/grit/signup">
            <button className="btn btn-sm rounded-full hover:bg-pink-500 hover:text-white bg-white  text-pink-500 btn-secondary ">
              <IoPersonAddSharp size={17} /> Add Account
            </button>
          </Link>
        </div>
        <section className="p-0 flex flex-col items-center justify-center">
          <div className="overflow-x-auto w-[300px] sm:w-[800px] text-black bg-white ">
            <table className="table">
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
              {data.map((val) => (
                <tbody>
                  <tr>
                    <td key={val.id}>
                      <div className=" flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <>
                              <img
                                src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.img}`}
                                alt="No Img"
                              />
                            </>
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{val.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{val.email}</td>

                    <td className="">
                      {val.role === "gym" ? (
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
                      {val.status === "Active" ? (
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
                    <td>0{val.number}</td>
                    <td>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_API_URL}/dashboard/grit/update/${val.id}`}
                      >
                        <button className="btn btn-sm hover:bg-green-500 hover:text-white bg-white  text-green-500 btn-success ">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <form action={deleteUser}>
                        <input type="hidden" name="id" value={val.id} />
                        <button className="btn btn-sm hover:bg-red-500 hover:text-white bg-white  text-red-500 btn-error ">
                          Delete
                        </button>
                      </form>
                    </td>
                  </tr>
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
        </section>
      </div>
    </>
  );
};

export default EditUser;
