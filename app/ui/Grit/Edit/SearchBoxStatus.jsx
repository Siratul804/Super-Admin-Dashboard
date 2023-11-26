"use client";
import { deleteUser } from "@/app/lib/actions";
import { useState } from "react";
import Link from "next/link";
const SearchBoxStatus = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4 mb-4 ">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <div className="searchbar p-3 shadow-md rounded-xl bg-slate-100 ">
          <span className="text-sm pl-1 text-black ">Status:</span>
          <br />
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            <input
              type="text"
              placeholder="Search with status "
              className="input border-transparent focus:border-transparent input-sm w-full text-[black] bg-white"
            />
          </button>
        </div>

        <dialog id="my_modal_5" className="modal  ">
          <div className="modal-box bg-white w-full ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  text-black   ">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg py-6 ">
              <select
                onChange={(e) => setSearchTerm(e.target.value)}
                className="select w-full bg-slate-100 "
              >
                <option disabled selected>
                  Select Status
                </option>
                <option>Active</option>
                <option>Disable</option>
              </select>
            </h3>
            <div className="py-2">
              {/* //inside content// */}
              <table className="table text-black bg-white">
                {/* head */}
                <thead>
                  <tr className=" text-sm-[5px] ">
                    <th>Name</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                {data
                  .filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.status
                        .toLowerCase()
                        .includes(searchTerm.toLocaleLowerCase())
                    ) {
                      return val;
                    }
                    return false;
                  })
                  .map((preview) => (
                    <>
                      <tbody>
                        <tr>
                          <td key={preview.id}>
                            <div className=" flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <>
                                    <img
                                      src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${preview.img}`}
                                      alt="No Img"
                                    />
                                  </>
                                </div>
                              </div>
                              <div>
                                <div className="font-bold">{preview.name}</div>
                              </div>
                            </div>
                          </td>

                          <td className="text-[11px]">
                            {preview.status === "Active" ? (
                              <>
                                <div className="badge badge-success gap-2 text-white ">
                                  active
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="badge badge-error gap-2 text-white ">
                                  disable
                                </div>
                              </>
                            )}
                          </td>

                          <td>
                            <Link
                              href={`${process.env.NEXT_PUBLIC_API_URL}/dashboard/grit/update/${preview.id}`}
                            >
                              <button className="btn btn-sm hover:bg-green-500 hover:text-white bg-white  text-green-500 btn-success ">
                                Edit
                              </button>
                            </Link>
                          </td>
                          <td>
                            <form action={deleteUser}>
                              <input
                                type="hidden"
                                name="id"
                                value={preview.id}
                              />
                              <button className="btn btn-sm hover:bg-red-500 hover:text-white bg-white  text-red-500 btn-error ">
                                Delete
                              </button>
                            </form>
                          </td>
                        </tr>
                      </tbody>
                    </>
                  ))}
                {/* foot */}
              </table>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default SearchBoxStatus;
