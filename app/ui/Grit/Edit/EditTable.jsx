import { MdModeEdit } from "react-icons/md";
import Link from "next/link";
const EditTable = async ({ data, filterData }) => {
  return (
    <>
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
            {filterData.length > 0 ? (
              <>
                {filterData.map((val) => (
                  <>
                    {val.role === "grit" ? (
                      <>
                        <tr>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex ">
                              <div className="h-10 w-10">
                                <img
                                  src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.img}`}
                                  alt="No Img"
                                  className="rounded-full"
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
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </>
            ) : (
              <>
                {data.map((val) => (
                  <>
                    {val.role === "grit" ? (
                      <>
                        <tr>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex ">
                              <div className="h-10 w-10">
                                <img
                                  src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.img}`}
                                  alt="No Img"
                                  className="rounded-full"
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
                    ) : (
                      <></>
                    )}
                  </>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EditTable;
