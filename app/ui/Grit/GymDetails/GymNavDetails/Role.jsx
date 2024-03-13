import Link from "next/link";
import SearchBox from "./RolesComponents/SearchBox";
import Pagination from "./RolesComponents/Pagination";
import { IoMdAdd } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";

const Role = ({ RolePaginationData, id, RolePaginationCount }) => {
  // Extract gym_ids from GymUserData
  const gymIds = RolePaginationData.map((val) => val.gym_id);

  // Convert id to a number
  const id_num = parseInt(id);

  // Check if gymIds array includes the specified id_num
  const isIdIncluded = gymIds.includes(id_num);

  return (
    <>
      <div className="py-2"></div>
      <SearchBox />
      <div className="py-5"></div>

      <section className="bg-white w-full shadow-lg rounded-lg">
        <div className="">
          <div className="p-3  flex justify-between  ">
            <h1 className="text-lg font-bold text-black ">Role List</h1>
            <Link
              // I have to work on here casue I need the id in create gym_role page
              href={`/dashboard/grit/createGymRole/${id_num}`}
              className="bg-black rounded-lg text-white text-sm"
            >
              <button className="btn btn-neutral btn-sm text-white  ">
                <IoMdAdd size={17} /> Add Role
              </button>
            </Link>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto w-full h-[44vh] ">
          <table className="w-full border-collapse border border-slate-100">
            <thead>
              <tr>
                <th className="px-1 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                  Descriptoin
                </th>
                <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                  Edit
                </th>
              </tr>
            </thead>
            {isIdIncluded ? (
              <>
                {/* Render specific user data for the matching gym_id */}
                {/* {GymUserData.filter((val) => val.gym_id === id_num).map((val) => (
              <div key={val.id}>
                <h1>{val.gym_id}</h1>
                <h1>{val.email}</h1>
              </div>
            ))} */}

                <tbody className="bg-white">
                  <>
                    {RolePaginationData.filter(
                      (val) => val.gym_id === id_num
                    ).map((val) => (
                      <>
                        <>
                          <tr>
                            <td className="px-1 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex ">
                                {/* <div className="h-10 w-10">
                      <img
                        src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.img}`}
                        alt="No Img"
                        className="rounded-full"
                      />
                    </div> */}
                                <div className="px-1 py-3   ">
                                  <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                                    {val.name}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                              <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                                {val.description}
                              </p>
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              {val.status === "Active" ? (
                                <>
                                  <div className=" p-0.2 bg-[#22c55e29] w-20 h-4.5 text-center rounded-md">
                                    <p className="text-center text-sm leading-4  font-bold  text-[#118d57]  tracking-wider">
                                      Active
                                    </p>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className=" p-0.2 bg-[#ff563029] w-20 h-4.5 text-center rounded-md">
                                    <p className="text-center text-sm leading-4  font-bold  text-[#b71d18]  tracking-wider">
                                      Disable
                                    </p>
                                  </div>
                                </>
                              )}
                            </td>

                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                              <Link
                                href={`/dashboard/grit/editGymRole/${val.id}`}
                                className="flex w-8 p-2 hover:bg-slate-100 rounded-full"
                              >
                                <MdModeEdit size={16} color="black" />
                              </Link>
                            </td>
                          </tr>
                        </>
                      </>
                    ))}
                  </>
                </tbody>
              </>
            ) : (
              <p>No Data</p>
            )}
          </table>
        </div>

        {/* Table */}
        <Pagination PaginationCount={RolePaginationCount} />
      </section>
    </>
  );
};

export default Role;
