import UpdateUser from "../UsersComponents/UpdateUser";
import UpdatePass from "../UsersComponents/UpdatePass";
const Table = async ({ PaginationData, user }) => {
  const gym_id = user.gym_id;

  const gymIds = PaginationData.map((val) => val.gym_id);

  const isIdIncluded = gymIds.includes(gym_id);

  console.log(isIdIncluded);

  return (
    <>
      <div className="overflow-x-auto w-full h-auto ">
        <table className="w-full border-collapse border border-slate-100">
          <thead>
            <tr>
              <th className="px-1 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Number
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Email
              </th>

              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Status
              </th>

              <>
                <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                  Edit
                </th>
              </>
            </tr>
          </thead>
          <tbody className="bg-white  ">
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
                          <div className="px-2 py-3   ">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                        <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                          {val.number}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                        <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                          {val.email}
                        </p>
                      </td>

                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        {val.status === "Active" ? (
                          <>
                            <div className=" p-0.2 bg-[#22c55e29] text-center rounded-md">
                              <p className="text-center text-sm leading-4  font-bold  text-[#118d57]  tracking-wider">
                                Active
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className=" p-0.2 bg-[#ff563029] text-center rounded-md">
                              <p className="text-center text-sm leading-4  font-bold  text-[#b71d18]  tracking-wider">
                                Disable
                              </p>
                            </div>
                          </>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex">
                          <div>
                            <UpdateUser
                              id={val.id}
                              name={val.name}
                              email={val.email}
                              number={val.number}
                              type={val.type}
                              status={val.status}
                              role_id={val.role_id}
                            />
                          </div>
                          <div className="">
                            <UpdatePass email={val.email} id={val.id} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  </>
                </>
              ))}
            </>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
