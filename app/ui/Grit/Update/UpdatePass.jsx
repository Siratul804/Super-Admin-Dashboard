"use client";
const UpdatePass = () => {
  return (
    <>
      <div className="flex justify-center py-2 ">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <span
          className="bg-white text-red-500 cursor-pointer "
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Wanna Chnage the Password??
        </span>

        <dialog id="my_modal_3" className="modal  ">
          <div className="modal-box bg-white ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  text-black   ">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Change Password</h3>
            <div className="py-4">
              {/* //inside content// */}

              <form action="">
                <input
                  placeholder="New Password"
                  className="input input-bordered w-full  text-[black] bg-white "
                />
                <div className="pt-3"></div>
                <input
                  placeholder="Confirm Password"
                  className="input input-bordered w-full  text-[black] bg-white "
                />
                <div className="pt-3"></div>
                <button className="btn text-white bg-black hover:bg-black hover:text-white btn-sm w-full  ">
                  Upload
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default UpdatePass;
