import AddPayment from "./AddPayment";
import InvDetails from "./InvDetails";

const Table = ({ paginationInvoiceData, id, MemberSpecificData }) => {
  const member_ids = paginationInvoiceData.map((val) => val.m_id);

  var memberId = parseInt(id);

  const isIdIncluded = member_ids.includes(memberId);

  console.log(isIdIncluded);

  return (
    <>
      {" "}
      <div className="overflow-x-auto w-full h-auto ">
        <table className="w-full border-collapse border border-slate-100">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Photo
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Member
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Member Id
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Inv. No.
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Pay Date
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Valid Date
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Inv. Amount
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Status
              </th>

              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Pay
              </th>
              <th className="px-6 py-3 bg-slate-100 text-left text-md leading-4 font-medium text-gray-600 tracking-wider">
                Details
              </th>
            </tr>
          </thead>
          {isIdIncluded ? (
            <tbody className="bg-white  ">
              <>
                {paginationInvoiceData
                  .filter((val) => val.m_id === memberId)
                  .map((val) => (
                    <>
                      <>
                        <tr>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {MemberSpecificData.map((val) => (
                              <>
                                <img
                                  src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.photo}`}
                                  alt="No Img"
                                  className="rounded-md w-16 h-auto"
                                />
                              </>
                            ))}

                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider"></p>
                          </td>
                          <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            {MemberSpecificData.map((val) => (
                              <>
                                <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                                  {val.name}
                                </p>
                              </>
                            ))}
                          </td>
                          <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.member_id}
                            </p>
                          </td>
                          <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.id}
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.invoice_paydate}
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.invoice_duedate}
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.invoice_amount}
                            </p>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {val.status}
                            </p>
                          </td>
                          <td className="px-7 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              <AddPayment />
                              {/* Need to work on payment which is connected with pay-date & status  */}
                            </p>
                          </td>
                          <td className="px-9 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              <InvDetails />
                            </p>
                          </td>
                        </tr>
                      </>
                    </>
                  ))}
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

export default Table;
