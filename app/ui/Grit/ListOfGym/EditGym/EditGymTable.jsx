import Link from "next/link";
import UpdateGym from "../UpdateGym/UpdateGym";
import { CgWebsite } from "react-icons/cg";
const EditGymTable = async ({ PaginationData }) => {
  return (
    <>
      <div className="overflow-x-auto w-full sm:w-full h-auto ">
        <table className="w-full  border-collapse border border-slate-100">
          <thead>
            <tr>
              <th className="px-1 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Status
              </th>

              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Registered
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Website
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Edit
              </th>
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
                            <Link href={`/dashboard/grit/gymDetails/${val.id}`}>
                              <img
                                src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.logo}`}
                                alt="No Img"
                                className="rounded-full w-[45px] h-[40px] "
                              />
                            </Link>
                          </div>
                          <div className="px-3 py-3   ">
                            <Link href={`/dashboard/grit/gymDetails/${val.id}`}>
                              <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                                {val.name}
                              </p>
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                        <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                          {val.address}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                        <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                          {val.phone}
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
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-black ">
                        <div className="flex justify-center text-sm tracking-wider leading-4 font-medium ">
                          {val.RegisteredSince}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div className="flex justify-center p-1 ">
                          <a
                            // need to add full website url with https
                            href={val.website}
                            target="_blank"
                            className="p-2 hover:bg-slate-100 rounded-full "
                          >
                            <CgWebsite size={16} color="black" />
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <div>
                          <UpdateGym
                            id={val.id}
                            name={val.name}
                            address={val.address}
                            phone={val.phone}
                            email={val.email}
                            status={val.status}
                            RegisteredSince={val.RegisteredSince}
                            website={val.website}
                            logo={val.logo}
                          />
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

export default EditGymTable;
