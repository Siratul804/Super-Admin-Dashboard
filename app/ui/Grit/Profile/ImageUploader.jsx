"use client";

import { useState } from "react";
import { addImg } from "@/app/lib/actions";
import { useFormState } from "react-dom";

const ImageUploader = ({ id }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [state, formAction] = useFormState(addImg, undefined);

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-8 mb-4 ">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn  text-white bg-black hover:bg-black  btn-sm w-[200px] border-none shadow-md "
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Change Image
        </button>
        <dialog id="my_modal_3" className="modal  ">
          <div className="modal-box bg-white ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  text-black   ">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Upload Your Image</h3>
            <b className="font-bold text-sm text-primary ">
              ( select .png & less than 1MB file )
            </b>
            <div className="py-4">
              {/* //inside content// */}
              {previewImage && (
                <div className="mb-5">
                  <p className="text-lg font-semibold mb-2">Preview:</p>
                  <div className="flex justify-center ">
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-[150px] h-[150px] object-cover rounded-full shadow-md"
                    />
                  </div>
                </div>
              )}
              <form action={formAction}>
                <label className="flex flex-col items-center w-full p-10 bg-gray-100 border border-dashed rounded-lg cursor-pointer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 text-gray-700 mx-auto mb-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  <input type="hidden" name="id" value={id} />
                  <span className="text-sm text-gray-600">Select a file</span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    name="file"
                    onChange={handleImageChange}
                    required
                  />
                </label>
                <div className="pt-3"></div>
                <button className="btn text-white bg-black hover:bg-black hover:text-white btn-sm w-full  ">
                  Upload
                </button>
                <div className="toast">
                  <span className="text-red-500 text-[13px] sm:text-[15px] pr-2 sm:pr-16 ">
                    {state && state}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default ImageUploader;
