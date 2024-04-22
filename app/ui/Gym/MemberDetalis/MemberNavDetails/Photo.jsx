"use client";

import { addMemberPhoto } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import { useState } from "react";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

const Photo = ({ id }) => {
  const [image, setImage] = useState(null);

  const [state, formAction] = useFormState(addMemberPhoto, undefined);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  function Submit() {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className=" bg-black text-white h-[6vh] w-full rounded-md font-bold "
        disabled={pending}
      >
        {pending ? "Updating..." : "Update Image"}
      </button>
    );
  }

  const formRef = useRef();

  useEffect(() => {
    if (state?.message === "Updated") {
      formRef.current.reset();
      toast.success("Image Update Successfully !", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    } else if (state?.message === "Failed") {
      toast.error("Failed to Update !", {
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
      <div className="py-2"></div>
      <div className="general bg-white shadow-lg pt-[10vh]  rounded-lg h-[80vh] ">
        <div className="flex flex-col items-center justify-center">
          <label htmlFor="imageInput" className="cursor-pointer">
            <div className="relative overflow-hidden sm:w-[45vh] sm:h-[45vh] w-[40vh] h-[40vh] rounded-lg border-2 border-gray-300">
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="object-cover w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <span className="ml-2 text-gray-400">Select Image</span>
                </div>
              )}
            </div>

            <form action={formAction} ref={formRef}>
              <input type="hidden" name="id" value={id} />

              <input
                id="imageInput"
                type="file"
                name="photo"
                accept="image/*"
                className="hidden"
                required
                onChange={handleImageChange}
              />
              <main>
                <label className="label flex justify-center  ">
                  <span className="text-[black] pt-2 pb-2">
                    <b className="font-bold text-primary text-xs ">
                      ( Select png, jpg, jpeg, svg & less than 1MB file )
                    </b>
                  </span>
                </label>
                <Submit />
              </main>
            </form>
          </label>
        </div>
      </div>
    </>
  );
};

export default Photo;
