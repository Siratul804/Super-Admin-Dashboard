"use client";
import { addPayment } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const AddPayment = ({ inv_id, user, inv_amount }) => {
  const [discount, setDiscount] = useState(0);
  const [discountType, setDiscountType] = useState("amount"); // 'amount' or 'percentage'
  const [amountToPay, setAmountToPay] = useState(0);

  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="btn btn-sm btn-neutral text-white h-[6vh] w-[35vh] rounded-md"
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

  const formRef = useRef();

  useEffect(() => {
    if (state?.message === "Added") {
      document.getElementById(inv_id).close();
      formRef.current.reset();
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
  }, [state]);

  const dueAmount = inv_amount;

  useEffect(() => {
    const calculateDiscount = () => {
      let finalAmount = 0;

      if (discountType === "amount") {
        finalAmount = dueAmount - discount;
      } else if (discountType === "percentage") {
        finalAmount = dueAmount - dueAmount * (discount / 100);
      }

      setAmountToPay(finalAmount > 0 ? finalAmount : 0); // Ensure amount to pay is not negative
    };

    calculateDiscount();
  }, [dueAmount, discount, discountType]);

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
      {/* .....add modal data....... */}
      <dialog id={inv_id} className="modal">
        <div className="modal-box bg-white max-w-[80vh]">
          <div className="">
            {/* //inside content// */}
            <div className="">
              <div className="flex justify-between">
                <h1 className="text-xl text-black">Make Payment</h1>
                <div>
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
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
                    <input
                      type="hidden"
                      name="collected_by"
                      value={user.name}
                    />
                  </div>
                  <div className="flex justify-between sm:flex-row flex-col">
                    <main className="pr-1">
                      <label className="label">
                        <span className="text-[black] text-sm">
                          Payment Due
                        </span>
                      </label>
                      <input
                        type="number"
                        placeholder="Due Amount"
                        name="amount_due"
                        required
                        autoComplete="off"
                        value={dueAmount}
                        className="input h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                        readOnly
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
                        onChange={(e) =>
                          setDiscount(parseFloat(e.target.value))
                        }
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
                          Amount to pay
                        </span>
                      </label>
                      <input
                        type="number"
                        placeholder="Amount"
                        name="amount"
                        required
                        autoComplete="off"
                        value={amountToPay.toFixed(2)}
                        className="input h-[6vh] bg-[#FFFFFF] appearance-none border-1 border-[#8d94b0] rounded-md w-[35vh] py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-black"
                        readOnly
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
        </div>
      </dialog>
    </div>
  );
};

export default AddPayment;
