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

  var inv_id = parseInt(inv_id);

  const isIdIncludedInvoice = inv_ids.includes(inv_id);

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
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-4 text-black">
                    ✕
                  </button>
                </form>
              </div>
            </div>
            <div className="py-3">
              <hr />
            </div>
            <section ref={printRef} className="p-3">
              {isIdIncluded ? (
                <>
                  <section className="gym_info">
                    {GetGymData.filter((val) => val.id === gym_id_num).map(
                      (val) => (
                        <>
                          <img
                            src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${val.logo}`}
                            alt="No Img"
                            className=" h-auto w-[10vh] rounded-md "
                          />
                          {val.name}
                        </>
                      )
                    )}
                  </section>
                  <div className="py-2">
                    <hr />
                  </div>
                  <div className="main_payment_details flex justify-between ">
                    <div className="one_payment_details">
                      <section className="py-2">
                        <b>Invoice</b>
                        <div className="py-2">
                          <p>Invoice No: {inv_id} </p>
                          {isIdIncludedInvoice ? (
                            <>
                              {InvoiceData.filter(
                                (val) => val.id === inv_id
                              ).map((val) => (
                                <>
                                  <p> Date of issue : {val.created_date}</p>
                                  <p> Due Date : {val.invoice_duedate}</p>
                                </>
                              ))}
                            </>
                          ) : (
                            <>no data</>
                          )}
                        </div>
                      </section>
                      <section>
                        <b>Bill To </b>
                        <div className="py-2">
                          {MemberSpecificData.map((val) => (
                            <>
                              <p>Member Name : {val.name}</p>
                              <p>Member ID : {val.member_id}</p>
                              <p>Member Cotact : {val.cell_number}</p>
                            </>
                          ))}
                        </div>
                      </section>
                      <section>
                        <b>Description of Service</b>
                        <div className="py-2">
                          {MemberSpecificData.map((val) =>
                            packgaeData.map(
                              (Package) =>
                                val.package_id === Package.PackageID && (
                                  <>
                                    <p>Package Name : {Package.Name}</p>
                                    <p>
                                      Package Description :{" "}
                                      {Package.Description}
                                    </p>
                                    <p>Package Price : {Package.Price}</p>
                                    <p>
                                      Duration Value : {Package.DurationValue}
                                    </p>
                                    <p>
                                      Duration Unit : {Package.DurationUnit}
                                    </p>
                                  </>
                                )
                            )
                          )}
                        </div>
                      </section>
                    </div>

                    <div className="two_payment_details">
                      <section>
                        <b>Payment Details</b>
                        <div className="py-2">
                          {PaymentSpecificData.map(
                            (val) =>
                              val.invoice_id === inv_id && (
                                <>
                                  <div className="py-3">
                                    <p>Pay Date : {val.pay_date} </p>
                                    <p>Amount Pay : {val.amount} </p>
                                    <p>Amount Due : {val.amount_due} </p>
                                    <p>Amount Discound : {val.discount} </p>
                                    <p>Amount type : {val.pay_type} </p>
                                  </div>
                                </>
                              )
                          )}
                          {isIdIncludedInvoice ? (
                            <>
                              {InvoiceData.filter(
                                (val) => val.id === inv_id
                              ).map((val) => (
                                <>
                                  <div className="py-1">
                                    <p className="py-1">Payment Status :</p>
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
                                          Prepaid
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                </>
                              ))}
                            </>
                          ) : (
                            <>no data</>
                          )}
                        </div>
                      </section>
                    </div>
                  </div>
                </>
              ) : (
                <>no data</>
              )}
              <div className="py-1">
                <hr />
              </div>
              <div className="py-1">
                <div>Thanks For Your Membership !</div>
                {GetGymData.filter((val) => val.id === gym_id_num).map(
                  (val) => (
                    <>
                      <i>{val.name}</i>
                    </>
                  )
                )}
              </div>
            </section>

            <div className="flex justify-center ">
              <button
                onClick={handlePrint}
                className=" bg-black text-white h-[6vh] w-auto p-4 sm:p-0 sm:w-[35vh] rounded-md font-bold "
              >
                Print
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default InvDetails;
