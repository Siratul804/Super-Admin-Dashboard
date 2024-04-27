"use client";
import { useRef, useState } from "react";
import Webcam from "react-webcam";

const CameraComponent = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const captureSnapshot = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    // Convert the image data to a Blob object
    const blob = dataURLtoBlob(imageSrc);
    // Generate a unique filename
    const filename = generateFilename();

    console.log(filename);

    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(blob);
    anchor.download = filename; // Use the generated filename for the downloaded image
    anchor.click();

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

  // Function to generate a unique filename
  const generateFilename = () => {
    const timestamp = Date.now(); // Get the current timestamp
    const randomString = Math.random().toString(36).substring(2, 8); // Generate a random string
    return `snapshot_${timestamp}_${randomString}.jpeg`; // Combine timestamp and random string
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={640}
        height={480}
      />
      <button onClick={captureSnapshot}>Capture Snapshot</button>
      {capturedImage && (
        <div>
          <h2>Captured Image:</h2>
          <img src={capturedImage} alt="Captured" />
        </div>
      )}
    </div>
  );
};

export default CameraComponent;
