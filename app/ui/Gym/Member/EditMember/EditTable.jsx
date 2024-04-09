import UpdateMember from "../UpdateMember/UpdateMember";
const EditTable = async ({ MemberData, user, packgaeData }) => {
  const gym_id = user.gym_id;

  const gymIds = MemberData.map((val) => val.gym_id);

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
                Member Id
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Package
              </th>
              {/* <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Gender
              </th> */}
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Blood Group
              </th>

              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Edit
              </th>
            </tr>
          </thead>
          {isIdIncluded ? (
            <tbody className="bg-white  ">
              <>
                {MemberData.filter((val) => val.gym_id === gym_id).map(
                  (val) => (
                    <>
                      <>
                        <tr>
                          <td className="px-1 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex ">
                              <div className="h-10 w-10">
                                <img
                                  src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.photo}`}
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
                              {val.member_id}
                            </p>
                          </td>

                          <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.cell_number}
                            </p>
                          </td>
                          {/* <td className="px-[6vh] py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.gender}
                            </p>
                          </td> */}
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {packgaeData.map((Package) => (
                              <>
                                {val.package_id === Package.PackageID ? (
                                  <>
                                    <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                                      {Package.Name}
                                    </p>
                                  </>
                                ) : (
                                  <></>
                                )}
                              </>
                            ))}
                          </td>
                          <td className="px-[10vh] py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.blood_group}
                            </p>
                          </td>

                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex">
                              <div>
                                <UpdateMember
                                  id={val.Id}
                                  Name={val.name}
                                  gender={val.gender}
                                  cell_number={val.cell_number}
                                  package_id={val.package_id}
                                  blood_group={val.blood_group}
                                  // LastUpdateDate={val.LastUpdateDate}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    </>
                  )
                )}
              </>
            </tbody>
          ) : (
            <>No Data</>
          )}
        </table>
      </div>
    </>
  );
};

export default EditTable;
