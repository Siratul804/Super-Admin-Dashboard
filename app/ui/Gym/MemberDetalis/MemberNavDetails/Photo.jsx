"use client";
import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import { MdOutlineFileUpload } from "react-icons/md";
import { addMemberPhoto } from "@/app/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const Photo = ({ id }) => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [photo, setPhoto] = useState(null);

  const captureSnapshot = () => {
    const imageSrc = webcamRef.current.getScreenshot();

    console.log(typeof imageSrc);

    // Set the captured image to display it
    setCapturedImage(imageSrc);
    setPhoto(imageSrc);
  };

  const initialState = {
    message: "",
  };

  const [state, formAction] = useFormState(addMemberPhoto, initialState);

  function Submit() {
    const { pending } = useFormStatus();

    return (
      <button
        type="submit"
        className=" bg-black text-white h-[6vh] w-full rounded-md "
        disabled={pending}
      >
        <p className="flex justify-center font-bold ">
          {pending ? (
            <>
              <MdOutlineFileUpload size={25} /> Uploading
            </>
          ) : (
            <>
              <MdOutlineFileUpload size={25} /> Upload
            </>
          )}
        </p>
      </button>
    );
  }

  useEffect(() => {
    if (state?.message === "Updated") {
      toast.success("Photo Update Successfully !", {
        style: {
          background: "#008000",
          color: "#fff",
        },
      });
    } else if (state?.message === "Failed") {
      toast.error("Photo Update Failed !", {
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
      <div className="general bg-white shadow-lg  rounded-lg h-[80vh] ">
        <div className="flex justify-evenly flex-wrap ">
          <div className=" sm:pt-4 pt-0 ">
            <h2 className="text-xl py-1 text-black ">Camera:</h2>
            <div className="p-2 border border-black rounded-md ">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                className="w-[75vh] h-auto"
              />
            </div>
            <div className="py-2"></div>
            <button
              className=" bg-black text-white h-[6vh] w-full rounded-md font-bold "
              onClick={captureSnapshot}
            >
              Take Snapshot
            </button>
          </div>
          <div>
            {/* ................ */}

            <form action={formAction}>
              <input type="hidden" name="id" value={id} />

              <input name="photo" type="hidden" value={photo} />

              <div className="sm:pt-28 pt-5 ">
                <h2 className="text-md py-1 text-black ">
                  Captured Image Apparels Here:
                </h2>
                {capturedImage && (
                  <>
                    <img
                      src={capturedImage}
                      className="w-[42vh] h-auto rounded-md "
                      alt="Captured"
                    />

                    <div className="py-2"></div>
                    <Submit />
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Photo;
