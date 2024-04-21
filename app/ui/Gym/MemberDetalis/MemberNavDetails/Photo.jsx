"use client";

import { useState } from "react";
const Photo = () => {
  const [image, setImage] = useState(null);

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
    // const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className=" bg-black text-white h-[6vh] w-full rounded-md font-bold "
        // disabled={pending}
      >
        {/* {pending ? "Updating..." : "Update Member"} */}
        Change Image
      </button>
    );
  }

  return (
    <>
      <div className="py-2"></div>
      <div className="general bg-white shadow-lg p-5 rounded-lg  ">
        <div className="flex flex-col items-center justify-center">
          <label htmlFor="imageInput" className="cursor-pointer">
            <div className="relative overflow-hidden w-[45vh] h-[45vh] rounded-lg border-2 border-gray-300">
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

            <form action="">
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              <main>
                <label className="label">
                  <span className="text-[black] text-sm pt-2 pb-2 ">
                    <b className="font-bold text-sm text-primary ">
                      ( png, jpg, jpeg, svg & less than 1MB file )
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
