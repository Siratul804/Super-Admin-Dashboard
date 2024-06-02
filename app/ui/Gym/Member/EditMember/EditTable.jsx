import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";
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
                <div className="flex flex-wrap ">
                  <p className="pr-1"> Member </p>
                  <p className="pt-0.5">
                    <FaArrowUp size={12} />
                  </p>
                </div>
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Package
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Gender
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Blood Group
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
                              <div className="h-auto w-12">
                                <Link
                                  href={`/dashboard/gym/memberDetails/${val.Id}`}
                                >
                                  <img
                                    src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.photo}`}
                                    alt="No Img"
                                    className="rounded-md"
                                  />
                                </Link>
                              </div>
                              <div className="px-2 py-3   ">
                                <Link
                                  href={`/dashboard/gym/memberDetails/${val.Id}`}
                                >
                                  <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                                    {val.name}
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            <Link
                              href={`/dashboard/gym/memberDetails/${val.Id}`}
                            >
                              <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                                #{val.member_id}
                                <hr />
                              </p>
                            </Link>
                          </td>

                          <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.cell_number}
                            </p>
                          </td>

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
                          <td className="px-[6vh] py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.gender}
                            </p>
                          </td>
                          <td className="px-[10vh] py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.blood_group}
                            </p>
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
