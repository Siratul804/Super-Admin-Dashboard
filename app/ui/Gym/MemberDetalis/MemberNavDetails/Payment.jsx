import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { addPayment } from "@/app/lib/actions";
import toast from "react-hot-toast";

const Payment = ({
  id,
  user,
  packgaeData,
  MemberSpecificData,
  MemberInvoiceSpecificData,
}) => {
  const gym_id = user.gym_id;

  console.log(gym_id);

  const initialState = {
    message: "",
  };

  const Invoice_id = MemberInvoiceSpecificData.map((val) => val.id);

  const [state, paymentAciton] = useFormState(addPayment, initialState);

  const [paymentDue, setPaymentDue] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [payableAmount, setPayableAmount] = useState(0);

  useEffect(() => {
    if (state?.message === "Added") {
      toast.success("Package Update Successfully !", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    } else if (state?.message === "Already Exits") {
      toast.error("Package Update Failed !", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    }
  }, [state]);

  useEffect(() => {
    let dueAmount = 0;
    MemberSpecificData.forEach((i) => {
      packgaeData.forEach((val) => {
        if (val.PackageID === i.package_id) {
          dueAmount += parseFloat(val.Price);
        }
      });
    });
    setPaymentDue(dueAmount);
    setPayableAmount(dueAmount);
  }, [MemberSpecificData, packgaeData]);

  useEffect(() => {
    setPayableAmount(paymentDue - discount);
  }, [discount, paymentDue]);

  function SubmitPayment() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className=" bg-black text-white h-[6vh] w-auto p-4 sm:p-0 sm:w-[35vh] rounded-md font-bold "
        disabled={pending}
      >
        {pending ? "Saving..." : "Make Payment"}
      </button>
    );
  }

  return (
    <>
      <div className="py-2"></div>
      <div className="package bg-white shadow-lg rounded-lg h-auto py-[15vh] sm:h-[80vh] ">
        <form action={paymentAciton}>
          {/* hidden */}
          <input type="hidden" name="invoice_id" value={Invoice_id} />
          <input type="hidden" name="collector_id" value={user.id} />
          <input type="hidden" name="collected_by" value={user.name} />
          {/* hidden */}
          <section className=" flex justify-evenly flex-wrap  ">
            <main className="">
              <label className="label">
                <span className="text-[black]">Payment Due :</span>
              </label>
              <div className=" p-2 sm:pl-4 flex items-center border h-[6vh]  border-[#8d94b0] rounded-md text-black w-auto sm:w-[55vh] ">
                <p>{paymentDue}</p>
              </div>
            </main>
            <main className="">
              <label className="label">
                <span className="text-[black]">Discount :</span>
              </label>
              <input
                type="number"
                name="discount"
                value={discount}
                onChange={(e) => setDiscount(parseFloat(e.target.value) || "")}
                className="input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-auto sm:w-[55vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
              />
            </main>
          </section>
          <section className=" flex justify-evenly flex-wrap pt-0 sm:pt-5 ">
            <main className="">
              <label className="label">
                <span className="text-[black]">Payable Amount :</span>
              </label>
              <input
                type="number"
                name="amount"
                value={payableAmount}
                readOnly
                className="input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-auto sm:w-[55vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
              />
            </main>
            <main className="">
              <label className="label">
                <span className="text-[black]">Payment Type :</span>
              </label>
              <select
                name="pay_type"
                required
                className="input  h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-auto sm:w-[55vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
              >
                <>
                  <option value="" className="text-slate-300">
                    Select
                  </option>
                  <option>Cash</option>
                  <option>bKash</option>
                  <option>Credit/Debit Card</option>
                </>
              </select>
            </main>
          </section>
          <section className="flex py-5 justify-center flex-wrap">
            <main>
              <label className="label">
                <span className="text-[black] text-sm pt-1 "></span>
              </label>
              <SubmitPayment />
            </main>
          </section>
        </form>
      </div>
    </>
  );
};

export default Payment;
