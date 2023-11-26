"use client";
import { deleteMember } from "@/app/lib/actions";
import { useState } from "react";
import Link from "next/link";
const SearchBoxNumber = ({ data, user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-4 mb-4 ">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <div className="searchbar p-3 shadow-md rounded-xl bg-slate-100 ">
          <span className="text-sm pl-1 text-black ">Number:</span>
          <br />
          <button
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            <input
              type="text"
              placeholder="Search with number "
              className="input border-transparent focus:border-transparent input-sm w-full text-[black] bg-white"
            />
          </button>
        </div>
        <dialog id="my_modal_4" className="modal  ">
          <div className="modal-box bg-white w-full ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  text-black   ">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg py-6 ">
              <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search For Members By Their Number "
                className="input border-transparent focus:border-transparent input-sm w-full p-5 sm:w-full text-[black] bg-slate-100"
              />
            </h3>
            <div className="py-2">
              {/* //inside content// */}
              <table className="table text-black bg-white">
                {/* head */}
                <thead>
                  <tr className=" text-sm-[5px] ">
                    <th>Name</th>
                    <th>Number</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                {data
                  .filter((val) => {
                    if (searchTerm === "") {
                      return val;
                    } else if (
                      val.number
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
                        {user.id === preview.userID ? (
                          <tr>
                            <td key={preview.id}>
                              <div className=" flex items-center space-x-3">
                                <div className="avatar">
                                  <div className="mask mask-squircle w-12 h-12">
                                    {preview.img.includes("undefined") ? (
                                      <>
                                        <img
                                          src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
                                          alt="No Img"
                                        />
                                      </>
                                    ) : (
                                      <>
                                        <img
                                          src={`${process.env.NEXT_PUBLIC_IMG_API_URL}/${preview.img}`}
                                          alt="No Img"
                                        />
                                      </>
                                    )}
                                  </div>
                                </div>
                                <div>
                                  <div className="font-bold">
                                    {preview.name}
                                  </div>
                                </div>
                              </div>
                            </td>

                            <td className="">{preview.number}</td>

                            <td>
                              <Link
                                href={`${process.env.NEXT_PUBLIC_API_URL}/dashboard/gym/update/${preview.id}`}
                              >
                                <button className="btn btn-sm hover:bg-green-500 hover:text-white bg-white  text-green-500 btn-success ">
                                  Edit
                                </button>
                              </Link>
                            </td>
                            <td>
                              <form action={deleteMember}>
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
                        ) : (
                          <></>
                        )}
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

export default SearchBoxNumber;
