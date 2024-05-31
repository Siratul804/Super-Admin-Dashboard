import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
const Invoice = ({ MemberInvoiceSpecificData }) => {
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <>
      <div className="py-2"></div>
      <div className="package bg-white shadow-lg rounded-lg h-auto py-16  sm:h-[80vh] ">
        <section ref={printRef}>
          <div className="pt-5"></div>
          <div className="p-6 max-w-2xl mx-auto bg-slate-50 shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-4 text-black ">
              Invoice
            </h1>
            {MemberInvoiceSpecificData.map((val) => (
              <div
                key={val.id}
                className="grid grid-cols-6 gap-4 mb-4 border-b pb-4"
              >
                <div className="text-left">
                  <p className="font-semibold text-black ">Invoice ID:</p>
                  <p className="font-semibold text-black ">Member ID:</p>
                  <p className="font-semibold text-black ">Date Time:</p>
                </div>
                <div className="text-left">
                  <p className="text-black">{val.id}</p>
                  <p className="text-black">{val.member_id}</p>
                  <p className="text-black">{val.date_time}</p>
                </div>
              </div>
            ))}
            <div className="text-center mt-4 flex justify-evenly ">
              <button
                onClick={handlePrint}
                className=" bg-black text-white h-[6vh] w-auto p-4 sm:p-0 sm:w-[35vh] rounded-md font-bold "
              >
                Print
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Invoice;
