import AddPayment from "./AddPayment";
import InvDetails from "./InvDetails";

const Table = ({
  paginationInvoiceData,
  id,
  MemberSpecificData,
  user,
  PaymentSpecificData,
  GetGymData,
  packgaeData,
}) => {
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
                  .reverse() // Reverse the array to get the latest data first
                  .map((val) => (
                    <>
                      <>
                        <tr key={val.id}>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            {MemberSpecificData.map((member) => (
                              <img
                                key={member.photo}
                                src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${member.photo}`}
                                alt="No Img"
                                className="rounded-md w-16 h-auto"
                              />
                            ))}

                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider"></p>
                          </td>
                          <td className="px-6 py-4 text-black whitespace-no-wrap border-b border-gray-200">
                            {MemberSpecificData.map((member) => (
                              <p
                                key={member.name}
                                className="text-left text-sm leading-4 font-medium text-black  tracking-wider"
                              >
                                {member.name}
                              </p>
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
                            {val.invoice_due_amount === val.zero ? (
                              <div className=" pl-2 pr-2 pt-1 pb-1 bg-[#22c55e29] text-center rounded-md">
                                <p className="text-center text-sm leading-4  font-bold  text-[#118d57]  tracking-wider">
                                  Paid
                                </p>
                              </div>
                            ) : val.invoice_due_amount ===
                              val.invoice_amount ? (
                              <div className=" pl-2 pr-2 pt-1 pb-1 bg-[#ff563029] text-center rounded-md">
                                <p className="text-center text-sm leading-4  font-bold  text-[#b71d18]  tracking-wider">
                                  Unpaid
                                </p>
                              </div>
                            ) : (
                              <div className=" pl-2 pr-2 pt-1 pb-1 bg-[#f1ff30fa] text-center rounded-md">
                                <p className="text-center text-sm leading-4  font-bold  text-[#8d8b11]  tracking-wider">
                                  PartialPaid
                                </p>
                              </div>
                            )}
                          </td>
                          <td className="px-5 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              <AddPayment
                                inv_id={val.id}
                                user={user}
                                inv_due_amount={val.invoice_due_amount}
                                m_id={id}
                                PaymentSpecificData={PaymentSpecificData}
                              />
                              {/* Need to work on payment which is connected with pay-date & status  */}
                            </p>
                          </td>
                          <td className="px-9 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p className="text-left text-sm leading-4 font-medium text-black  tracking-wider">
                              {/* In invoice details I would show this invoice_id is paying total payment data (this would help me to find out the specific transation the member has) */}
                              <InvDetails
                                inv_id={val.id}
                                user={user}
                                GetGymData={GetGymData}
                                MemberSpecificData={MemberSpecificData}
                                InvoiceData={paginationInvoiceData}
                                id={id}
                                packgaeData={packgaeData}
                                PaymentSpecificData={PaymentSpecificData}
                              />
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
