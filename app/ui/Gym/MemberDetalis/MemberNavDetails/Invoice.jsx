// import { useRef } from "react";
// import { useReactToPrint } from "react-to-print";
import Search from "./Invoice/Search";
import Table from "./Invoice/Table";
import Pagination from "./Invoice/Pagination";
const Invoice = ({
  paginationInvoice,
  id,
  MemberSpecificData,
  countNumber,
  user,
  PaymentSpecificData,
}) => {
  console.log(user.id);

  // const printRef = useRef();

  // const handlePrint = useReactToPrint({
  //   content: () => printRef.current,
  // });

  return (
    <>
      <div className="py-2"></div>
      <Search />
      <div className="py-5"></div>
      <div className="package bg-white shadow-lg rounded-lg h-auto py-2  ">
        {/* //start */}
        <section className="">
          <div className="">
            <div className="p-3">
              <h1 className="text-lg font-bold text-black ">Invoice List</h1>
            </div>
          </div>

          <>
            <div className="overflow-x-auto h-[52vh]">
              <Table
                paginationInvoiceData={paginationInvoice}
                MemberSpecificData={MemberSpecificData}
                id={id}
                user={user}
                PaymentSpecificData={PaymentSpecificData}
              />
            </div>
          </>

          <Pagination PaginationCount={countNumber} />
        </section>
        {/* //end */}
        {/* <div className="p-6 max-w-2xl mx-auto bg-slate-50 shadow-md rounded-lg">
          <section ref={printRef} className="p-5">
            <h1 className="text-2xl font-bold text-center mb-4 text-black ">
              Invoice
            </h1>
          </section>
          <div className="text-center mt-4 flex justify-evenly ">
            <button
              onClick={handlePrint}
              className=" bg-black text-white h-[6vh] w-auto p-4 sm:p-0 sm:w-[35vh] rounded-md font-bold "
            >
              Print
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Invoice;
