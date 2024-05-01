"use client";
import { useRef, useState } from "react";
import Webcam from "react-webcam";
import { MdOutlineFileUpload } from "react-icons/md";
import { addMemberPhoto } from "@/app/lib/actions";

const Photo = ({ id }) => {
  const webcamRef = useRef(null);
  const formRef = useRef();
  const [capturedImage, setCapturedImage] = useState(null);
  const [file, setFile] = useState(null);

  const captureSnapshot = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Convert the image data to a Blob object
    const blob = dataURLtoBlob(imageSrc);

    const capturedFile = new File([blob], "snapshot.jpeg", {
      type: "image/jpeg",
    }); // Create File object from Blob

    console.log(capturedFile);

    setFile(capturedFile); // Set the File object

    // Set the captured image to display it
    setCapturedImage(imageSrc);
  };

  // Function to convert data URL to Blob object
  const dataURLtoBlob = (dataURL) => {
    const byteString = atob(dataURL.split(",")[1]);
    const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uintArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uintArray[i] = byteString.charCodeAt(i);
    }
    return new Blob([arrayBuffer], { type: mimeString });
  };

  const handleSubmit = () => {
    console.log("Alert");
  };

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

            <form onSubmit={handleSubmit} ref={formRef}>
              <input type="hidden" name="id" value={id} />

              <input name="photo" type="file" className="hidden" />

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
                    <button
                      className=" bg-black text-white h-[6vh] w-full rounded-md "
                      type="submit"
                    >
                      <p className="flex justify-center font-bold ">
                        <MdOutlineFileUpload size={25} /> Upload
                      </p>
                    </button>
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
