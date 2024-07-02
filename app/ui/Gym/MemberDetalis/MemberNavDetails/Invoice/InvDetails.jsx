import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { MdReadMore } from "react-icons/md";

const InvDetails = ({
  inv_id,
  user,
  GetGymData,
  MemberSpecificData,
  InvoiceData,
  packgaeData,
  PaymentSpecificData,
  id, // m_id
}) => {
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const inv_id_plus = inv_id + 1;

  const gymIds = GetGymData.map((val) => val.id);

  const gym_id_num = user.gym_id;

  const isIdIncluded = gymIds.includes(gym_id_num);

  // invoice

  const inv_ids = InvoiceData.map((val) => val.id);

  const inv_id_num = parseInt(inv_id);

  const isIdIncludedInvoice = inv_ids.includes(inv_id_num);

  console.log(isIdIncluded);

  return (
    <div>
      <div className="flex justify-start">
        <button
          className="p-2 hover:bg-slate-100 rounded-full"
          onClick={() => document.getElementById(inv_id_plus).showModal()}
        >
          <MdReadMore size={20} />
        </button>
      </div>
      <dialog id={inv_id_plus} className="modal">
        <div className="modal-box bg-white max-w-[120vh]">
          <div className="">
            <div className="flex justify-between">
              <h1 className="text-xl text-black">Invoice Details</h1>
              <div>
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost">✕</button>
                </form>
              </div>
            </div>
          </div>

          <section ref={printRef} className="p-3">
            {isIdIncluded ? (
              <>
                <section className="gym_info mb-3">
                  {GetGymData.filter((val) => val.id === gym_id_num).map(
                    (val) => (
                      <div
                        key={val.id}
                        className="flex justify-center items-center space-x-4"
                      >
                        <img
                          src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.logo}`}
                          alt="No Img"
                          className="h-auto w-20 rounded-md"
                        />
                        <span className="font-semibold text-lg">
                          {val.name}
                        </span>
                      </div>
                    )
                  )}
                </section>

                <div className="flex flex-col space-y-4">
                  <section className="one_payment_details w-full">
                    <h2 className="text-2xl font-bold mb-4">Invoice Details</h2>
                    <table className="min-w-full bg-white border">
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2 font-semibold">
                            Invoice No:
                          </td>
                          <td className="border px-4 py-2">{inv_id}</td>
                        </tr>
                        {isIdIncludedInvoice &&
                          InvoiceData.filter(
                            (val) => val.id === inv_id_num
                          ).map((val) => (
                            <div key={val.id}>
                              <tr>
                                <td className="border px-4 py-2 font-semibold">
                                  Date of issue:
                                </td>
                                <td className="border px-4 py-2">
                                  {val.created_date}
                                </td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-semibold">
                                  Due Date:
                                </td>
                                <td className="border px-4 py-2">
                                  {val.invoice_duedate}
                                </td>
                              </tr>
                            </div>
                          ))}
                      </tbody>
                    </table>
                  </section>

                  <section className="bill_to w-full">
                    <h2 className="text-2xl font-bold mb-4">Bill To</h2>
                    <table className="min-w-full bg-white border">
                      <tbody>
                        {MemberSpecificData.map((val) => (
                          <div key={val.member_id}>
                            <tr>
                              <td className="border px-4 py-2 font-semibold">
                                Member Name:
                              </td>
                              <td className="border px-4 py-2">{val.name}</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 font-semibold">
                                Member ID:
                              </td>
                              <td className="border px-4 py-2">
                                {val.member_id}
                              </td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 font-semibold">
                                Member Contact:
                              </td>
                              <td className="border px-4 py-2">
                                {val.cell_number}
                              </td>
                            </tr>
                          </div>
                        ))}
                      </tbody>
                    </table>
                  </section>

                  <section className="service_description w-full">
                    <h2 className="text-2xl font-bold mb-4">
                      Description of Service
                    </h2>
                    <table className="min-w-full bg-white border">
                      <tbody>
                        {MemberSpecificData.map((val) =>
                          packgaeData.map(
                            (Package) =>
                              val.package_id === Package.PackageID && (
                                <div key={Package.PackageID}>
                                  <tr>
                                    <td className="border px-4 py-2 font-semibold">
                                      Package Name:
                                    </td>
                                    <td className="border px-4 py-2">
                                      {Package.Name}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border px-4 py-2 font-semibold">
                                      Package Description:
                                    </td>
                                    <td className="border px-4 py-2">
                                      {Package.Description}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border px-4 py-2 font-semibold">
                                      Package Price:
                                    </td>
                                    <td className="border px-4 py-2">
                                      {Package.Price}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border px-4 py-2 font-semibold">
                                      Duration Value:
                                    </td>
                                    <td className="border px-4 py-2">
                                      {Package.DurationValue}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="border px-4 py-2 font-semibold">
                                      Duration Unit:
                                    </td>
                                    <td className="border px-4 py-2">
                                      {Package.DurationUnit}
                                    </td>
                                  </tr>
                                </div>
                              )
                          )
                        )}
                      </tbody>
                    </table>
                  </section>

                  <section className="payment_details w-full">
                    <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
                    <table className="min-w-full bg-white border">
                      <tbody>
                        {PaymentSpecificData.map(
                          (val) =>
                            val.invoice_id === inv_id_num && (
                              <div key={val.id}>
                                <tr>
                                  <td className="border px-4 py-2 font-semibold">
                                    Pay Date:
                                  </td>
                                  <td className="border px-4 py-2">
                                    {val.pay_date}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border px-4 py-2 font-semibold">
                                    Amount Paid:
                                  </td>
                                  <td className="border px-4 py-2">
                                    {val.amount}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border px-4 py-2 font-semibold">
                                    Amount Due:
                                  </td>
                                  <td className="border px-4 py-2">
                                    {val.amount_due}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border px-4 py-2 font-semibold">
                                    Amount Discount:
                                  </td>
                                  <td className="border px-4 py-2">
                                    {val.discount}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border px-4 py-2 font-semibold">
                                    Discount Type:
                                  </td>
                                  <td className="border px-4 py-2">
                                    {val.invoice_discount_type}
                                  </td>
                                </tr>
                                <tr>
                                  <td className="border px-4 py-2 font-semibold">
                                    Payment Type:
                                  </td>
                                  <td className="border px-4 py-2">
                                    {val.pay_type}
                                  </td>
                                </tr>
                              </div>
                            )
                        )}
                        {isIdIncludedInvoice &&
                          InvoiceData.filter(
                            (val) => val.id === inv_id_num
                          ).map((val) => (
                            <tr key={val.id}>
                              <td className="border px-4 py-2 font-semibold">
                                Payment Status:
                              </td>
                              <td className="border px-4 py-2">
                                {val.invoice_due_amount === val.zero ? (
                                  <span className="block bg-green-200 text-green-700 text-center rounded-md py-1">
                                    Paid
                                  </span>
                                ) : val.invoice_due_amount ===
                                  val.invoice_amount ? (
                                  <span className="block bg-red-200 text-red-700 text-center rounded-md py-1">
                                    Unpaid
                                  </span>
                                ) : (
                                  <span className="block bg-yellow-200 text-yellow-700 text-center rounded-md py-1">
                                    Partial Paid
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </section>
                </div>
              </>
            ) : (
              <>no data</>
            )}

            <div className="pt-2 text-center">
              <div>Thanks For Your Membership!</div>
              {GetGymData.filter((val) => val.id === gym_id_num).map((val) => (
                <i key={val.id} className="italic">
                  {val.name}
                </i>
              ))}
            </div>
          </section>

          <div className="flex justify-center py-0">
            <button
              onClick={handlePrint}
              className="bg-black text-white h-[6vh]  w-[35vh] sm:w-44 rounded-md font-bold transition-transform transform hover:scale-105"
            >
              Print
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default InvDetails;
