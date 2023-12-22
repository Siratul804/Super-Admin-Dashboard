import UpdateUser from "../UpdateUser/UpdateUser";

const EditTable = async ({ FilPageData, PaginationData }) => {
  return (
    <>
      <div className="overflow-x-auto w-full h-auto ">
        <table className="w-full border-collapse border border-slate-100">
          <thead>
            <tr>
              <th className="px-1 py-3 bg-slate-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Number
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                Email
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
            <>
              {FilPageData.length > 0 ? (
                <>
                  {FilPageData.map((val) => (
                    <>
                      <>
                        <tr>
                          <td className="px-1 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex ">
                              <div className="h-10 w-10">
                                <img
                                  src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.img}`}
                                  alt="No Img"
                                  className="rounded-full"
                                />
                              </div>
                              <div className="px-2 py-2 text-black ">
                                {val.name}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            {val.number}
                          </td>
                          <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            {val.email}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {val.status === "Active" ? (
                              <>
                                <div className=" p-0.2 bg-[#22c55e29] text-center rounded-md">
                                  <p className="text-[#118d57] text-sm font-bold ">
                                    Active
                                  </p>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className=" p-0.2 bg-[#ff563029] text-center rounded-md">
                                  <p className="text-[#b71d18] text-sm font-bold ">
                                    Disable
                                  </p>
                                </div>
                              </>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <UpdateUser
                              id={val.id}
                              name={val.name}
                              email={val.email}
                              number={val.number}
                              role={val.role}
                              status={val.status}
                            />
                          </td>
                        </tr>
                      </>
                    </>
                  ))}
                </>
              ) : (
                <>
                  {PaginationData.map((val) => (
                    <>
                      <>
                        <tr>
                          <td className="px-1 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex ">
                              <div className="h-10 w-10">
                                <img
                                  src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.img}`}
                                  alt="No Img"
                                  className="rounded-full"
                                />
                              </div>
                              <div className="px-2 py-2 text-black ">
                                {val.name}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            {val.number}
                          </td>
                          <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            {val.email}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {val.status === "Active" ? (
                              <>
                                <div className=" p-0.2 bg-[#22c55e29] text-center rounded-md">
                                  <p className="text-[#118d57] text-sm font-bold ">
                                    Active
                                  </p>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className=" p-0.2 bg-[#ff563029] text-center rounded-md">
                                  <p className="text-[#b71d18] text-sm font-bold ">
                                    Disable
                                  </p>
                                </div>
                              </>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <UpdateUser
                              id={val.id}
                              name={val.name}
                              email={val.email}
                              number={val.number}
                              role={val.role}
                              status={val.status}
                            />
                          </td>
                        </tr>
                      </>
                    </>
                  ))}
                </>
              )}
            </>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EditTable;
