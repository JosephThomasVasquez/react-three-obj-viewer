import React, { useEffect } from "react";
import UseFBStorage from "./firebaseComponents/UseFBStorage";

const ProgressBar = ({ file, setImgFile, inputData }) => {
  const { fileUrl, progress } = UseFBStorage(file);
  console.log("Uploading...", progress);
  console.log(file);
  console.log('input data', inputData)

  useEffect(() => {
    if (fileUrl) {
      setImgFile(null);
    }
  }, [fileUrl, setImgFile, inputData]);

  return <div className="progress-bar" style={{ width: `${progress}%` }}></div>;
};

export default ProgressBar;
