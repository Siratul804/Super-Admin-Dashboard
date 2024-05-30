const Invoice = ({ MemberInvoiceSpecificData }) => {
  return (
    <>
      <div className="py-2"></div>
      <div className="package bg-white shadow-lg rounded-lg h-auto py-5  sm:h-[80vh] ">
        <div className="flex justify-evenly ">
          {MemberInvoiceSpecificData.map((val) => (
            <>
              <div>
                <p>Invoice ID : </p>
                <p>Member ID:</p>
                <p>Date Time :</p>
              </div>
              <div>
                <p>{val.id}</p>
                <p>{val.member_id}</p>
                <p>{val.date_time}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Invoice;
