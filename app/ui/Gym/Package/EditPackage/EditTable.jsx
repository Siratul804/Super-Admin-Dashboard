import UpdatePackage from "../UpdatePackage/UpdatePackage";
const EditTable = async ({ PaginationData, user }) => {
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
                Price
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                DurationValue
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                DurationUnit
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                CreateDate
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                UpdateDate
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Edit
              </th>
            </tr>
          </thead>
          {isIdIncluded ? (
            <tbody className="bg-white  ">
              <>
                {PaginationData.filter((val) => val.gym_id === gym_id).map(
                  (val) => (
                    <>
                      <>
                        <tr>
                          <td className="px-1 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.Name}
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.Price}
                            </p>
                          </td>
                          <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.Description}
                            </p>
                          </td>
                          <td className="px-[11vh] py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.DurationValue}
                            </p>
                          </td>
                          <td className="px-[8vh] py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.DurationUnit}
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.CreateDate}
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.LastUpdateDate}
                            </p>
                          </td>

                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div className="flex">
                              <div>
                                <UpdatePackage
                                  id={val.PackageID}
                                  Name={val.Name}
                                  Description={val.Description}
                                  Price={val.Price}
                                  DurationValue={val.DurationValue}
                                  DurationUnit={val.DurationUnit}
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
