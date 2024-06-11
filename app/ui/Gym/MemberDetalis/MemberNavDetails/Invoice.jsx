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
  GetGymData,
  packgaeData,
}) => {
  console.log(user.id);

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
                GetGymData={GetGymData}
                packgaeData={packgaeData}
              />
            </div>
          </>

          <Pagination PaginationCount={countNumber} />
        </section>
        {/* //end */}
      </div>
    </>
  );
};

export default Invoice;
