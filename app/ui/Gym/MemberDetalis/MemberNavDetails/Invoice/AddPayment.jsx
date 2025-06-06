"use client";
import { addPayment } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const AddPayment = ({ inv_id, user, inv_due_amount, m_id }) => {
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("amount");
  const [amountToPay, setAmountToPay] = useState(0);
  const [payDue, setPayDue] = useState(Number(inv_due_amount)); // Initialize with inv_due_amount

  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="bg-black pl-3 pr-3 pt-2 pb-2 w-[35vh] h-[6vh] text-sm rounded-md font-bold text-white"
        disabled={pending}
      >
        {pending ? "Saving..." : "Make Payment"}
      </button>
    );
  }

  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(addPayment, initialState);

  const formRef = useRef(null);

  useEffect(() => {
    if (state?.message === "Added") {
      document.getElementById(inv_id).close();
      formRef.current.reset(); // Reset the form

      // Reset all the state variables
      setDiscount(0);
      setDiscountType("amount");
      setAmountToPay(0);
      setPayDue(Number(inv_due_amount));

      toast.success("Payment Added Successfully !", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    } else if (state?.message === "Already Exits") {
      toast.error("Failed To Make Payment !", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    }
  }, [state, inv_id, inv_due_amount]);

  useEffect(() => {
    const calculateDiscount = () => {
      let finalAmount = 0;

      if (discountType === "amount") {
        finalAmount = payDue - discount;
      } else if (discountType === "percentage") {
        finalAmount = payDue - payDue * (discount / 100);
      }

      setAmountToPay(finalAmount > 0 ? finalAmount : 0);
    };

    calculateDiscount();
  }, [payDue, discount, discountType]);

  return (
    <div>
      <div className="flex justify-start">
        <button
          className="p-2 hover:bg-slate-100 rounded-full"
          onClick={() => document.getElementById(inv_id).showModal()}
        >
          <FaMoneyCheckDollar size={20} />
        </button>
      </div>
      <dialog id={inv_id} className="modal">
        <div className="modal-box bg-white max-w-[80vh]">
          <div className="">
            <div className="flex justify-between">
              <h1 className="text-xl text-black">Make Payment</h1>
              <p className="text-red-500 text-sm font-bold flex items-center">
                Payment Due : {payDue} Taka Only
              </p>
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
            <section className="flex justify-center">
              <form action={formAction} ref={formRef}>
                <div className="would_be_hidden">
                  <input type="hidden" name="invoice_id" value={inv_id} />
                  <input type="hidden" name="collector_id" value={user.id} />
                  <input type="hidden" name="collected_by" value={user.name} />
                  <input type="hidden" name="m_id" value={m_id} />
                  <input
                    type="hidden"
                    name="main_due_amount"
                    value={inv_due_amount}
                  />
                </div>
                <div className="flex justify-between sm:flex-row flex-col">
                  <main className="pr-1  ">
                    <label className="label">
                      <span className="text-[black] text-sm">
                        Amount
                        <span className="text-[12px]"> (can be modified) </span>
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Due Amount"
                      name="amount_due"
                      required
                      autoComplete="off"
                      onChange={(e) => setPayDue(parseFloat(e.target.value))}
                      value={payDue}
                      className="input h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                    />
                  </main>
                  <main className="pr-1">
                    <label className="label">
                      <span className="text-[black] text-sm">
                        Discount Type
                      </span>
                    </label>
                    <select
                      name="dis_type"
                      value={discountType}
                      onChange={(e) => setDiscountType(e.target.value)}
                      className="h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-[35vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                    >
                      <option disabled value="">
                        Select
                      </option>
                      <option value="amount">Amount</option>
                      <option value="percentage">Percentage</option>
                    </select>
                  </main>
                </div>

                <div className="flex justify-between sm:flex-row flex-col">
                  <main>
                    <label className="label">
                      <span className="text-[black] text-sm">Discount</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Discount"
                      name="discount"
                      value={discount}
                      onChange={(e) => setDiscount(parseFloat(e.target.value))}
                      autoComplete="off"
                      className="input h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                    />
                  </main>
                  <main className="pr-1">
                    <label className="label">
                      <span className="text-[black] text-sm">Pay Type</span>
                    </label>
                    <select
                      name="pay_type"
                      className="h-[6vh] bg-[#FFFFFF] appearance-none border-[1px] border-[#8d94b0] rounded-md w-[35vh] py-1 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                    >
                      <option disabled value="">
                        Select
                      </option>
                      <option>Cash</option>
                      <option>bKash</option>
                      <option>Credit/Debit Card</option>
                    </select>
                  </main>
                </div>
                <div className="flex justify-between sm:flex-row flex-col">
                  <main className="pr-1">
                    <label className="label">
                      <span className="text-[black] text-sm">
                        Final Amount{" "}
                        <span className="text-[12px]">(include discount)</span>
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Amount"
                      name="amount"
                      required
                      autoComplete="off"
                      value={amountToPay}
                      onChange={(e) =>
                        setAmountToPay(parseFloat(e.target.value))
                      }
                      className="input h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                    />
                  </main>
                  <main>
                    <label className="label">
                      <span className="text-[black] text-sm pt-5"></span>
                    </label>
                    <Submit />
                  </main>
                </div>
              </form>
            </section>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddPayment;
