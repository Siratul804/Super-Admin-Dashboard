"use client";

import { useState } from "react";
import { addImg } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { LuImagePlus } from "react-icons/lu";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const ImageUploader = ({ id }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [state, formAction] = useFormState(addImg, undefined);

  function Submit() {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        className="btn text-white bg-black hover:bg-black hover:text-white btn-sm w-full  "
        disabled={pending}
      >
        {pending ? "Uploading..." : "Upload"}
      </button>
    );
  }

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

  const formRef = useRef();

  useEffect(() => {
    if (state?.message === "Uploaded") {
      document.getElementById("my_modal_10").close();
      formRef.current.reset();
      toast.success("Image Upload Successfully !", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    } else if (state?.message === "Failed") {
      toast.error("Failed to Upload !", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    } else if (state?.message === "File Did't Match") {
      toast.error("File size is large! (image has to be less then 1MB)", {
        style: {
          background: "#FF0000",
          color: "#fff",
        },
      });
    }
  }, [state]);

  return (
    <>
      <div className="flex">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="w-full"
          onClick={() => document.getElementById("my_modal_10").showModal()}
        >
          <div className="hover:bg-slate-100 w-full p-1 rounded-md flex ">
            <LuImagePlus size={22} />
            <p className="pl-1 text-[15px] ">Change Image</p>
          </div>
        </button>
        <dialog id="my_modal_10" className="modal  ">
          <div className="modal-box bg-white ">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2  text-black   ">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Upload Your Image</h3>
            <b className="font-bold text-sm text-primary ">
              ( select png, jpg, jpeg, svg & less than 1MB file )
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
              <form action={formAction} ref={formRef}>
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
                    name="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                  />
                </label>
                <div className="pt-3"></div>
                <Submit />
                <div className="flex justify-center pt-1 ">
                  {state?.message === "File Did't Match" ? (
                    <>
                      <p className="text-red-500">
                        File size is large! (image has to be less then 1MB)
                      </p>
                    </>
                  ) : (
                    <></>
                  )}
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
