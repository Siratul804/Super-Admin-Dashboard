import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { MdReadMore } from "react-icons/md";

const InvDetails = ({ inv_id }) => {
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const inv_id_plus = inv_id + 1;

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
        <div className="modal-box bg-white max-w-[80vh]">
          <div className="">
            <div className="flex justify-between">
              <h1 className="text-xl text-black">Make Payment</h1>
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
            <section ref={printRef} className="flex justify-center">
              Hello I am Inv Details {inv_id_plus}
            </section>
            <button
              onClick={handlePrint}
              className=" bg-black text-white h-[6vh] w-auto p-4 sm:p-0 sm:w-[35vh] rounded-md font-bold "
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
