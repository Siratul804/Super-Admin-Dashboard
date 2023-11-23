import { deleteMember } from "@/app/lib/actions";
import Link from "next/link";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import SearchBox from "./SearchBox";
const EditMember = async ({ data, user }) => {
  return (
    <>
      <div className="pt-5 sm:pt-5 ">
        <section className="p-0 flex flex-col items-center justify-center">
          <SearchBox data={data} />
          <div className="overflow-x-auto">
            <>
              <div className="overflow-x-auto">
                <table className="table text-black bg-white">
                  {/* head */}
                  <thead>
                    <tr className=" text-sm-[5px] ">
                      <th>Name</th>
                      <th>Email</th>

                      <th>Status</th>
                      <th>Number</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  {data.map((val) => (
                    <tbody>
                      {user.id === val.userID ? (
                        <>
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
                            <td>{val.number}</td>
                            <td>
                              <Link
                                href={`${process.env.NEXT_PUBLIC_API_URL}/dashboard/gym/update/${val.id}`}
                              >
                                <button className="btn btn-sm hover:bg-green-500 hover:text-white bg-white  text-green-500 btn-success ">
                                  Edit
                                </button>
                              </Link>
                            </td>
                            <td>
                              <form action={deleteMember}>
                                <input type="hidden" name="id" value={val.id} />
                                <button className="btn btn-sm hover:bg-red-500 hover:text-white bg-white  text-red-500 btn-error ">
                                  Delete
                                </button>
                              </form>
                            </td>
                          </tr>
                        </>
                      ) : (
                        <> </>
                      )}
                    </tbody>
                  ))}

                  {/* foot */}
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Number</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="flex justify-between pt-3 ">
                <button className="btn-ghost">
                  <GrFormPrevious size={20} />
                </button>
                <button className="btn-ghost">
                  <GrFormNext size={20} />
                </button>
              </div>
            </>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditMember;
