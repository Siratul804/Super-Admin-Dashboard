import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";

const EditUser = async ({ data }) => {
  return (
    <>
      <div className="pt-5 sm:pt-5  ">
        <div className="flex justify-center">
          <div className="bg-white shadow-sm p-5 rounded-xl sm:h-[18vh] h-[30vh] sm:w-[150vh] w-[100vh] flex justify-evenly flex-wrap">
            <div>
              <label htmlFor="">Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter Your Name "
                className="input py input-sm  border-black focus:outline-black focus:border-black w-[250px] "
              />
            </div>
            <div>
              <label htmlFor="">Number</label>
              <br />
              <input
                type="number"
                placeholder="Enter Your Number "
                className="input py input-sm  border-black focus:outline-black focus:border-black w-[250px] "
              />
            </div>
            <div>
              <label htmlFor="">Status</label>
              <br />
              <select className="select border-black focus:outline-black focus:border-black select-sm w-[250px] ">
                <option>Active</option>
                <option>Disable</option>
              </select>
            </div>
          </div>
        </div>
        <div className="py-8 flex justify-end ">
          <Link href="/dashboard/grit/signup">
            <button className="btn btn-neutral btn-sm text-white ">
              <IoMdAdd size={17} /> Add Grit
            </button>
          </Link>
        </div>
        <section className=" p-3 bg-white w-full rounded-xl shadow-md flex  items-center justify-center">
          <div className="overflow-x-auto w-full h-[55vh] ">
            <table className="w-full border-collapse border border-slate-100">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-slate-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 bg-slate-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Number
                  </th>
                  <th className="px-6 py-3 bg-slate-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 bg-slate-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 bg-slate-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white  ">
                {data.map((val) => (
                  <>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex ">
                          <div className="h-10 w-10 rounded-full  ">
                            <img
                              src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.img}`}
                              alt="No Img"
                            />
                          </div>
                          <div className="px-2 py-2 ">{val.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        {val.number}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        {val.role}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        {val.status === "Active" ? (
                          <>
                            <div className="badge badge-accent badge-outline text-white ">
                              Active
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="badge badge-secondary badge-outline text-white ">
                              Disable
                            </div>
                          </>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                        <Link
                          href={`${process.env.NEXT_PUBLIC_API_URL}/dashboard/grit/update/${val.id}`}
                        >
                          <button className="p-2 hover:bg-slate-100 rounded-full ">
                            <MdModeEdit size={20} />
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default EditUser;
