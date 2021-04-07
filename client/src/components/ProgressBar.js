import React, { useEffect } from "react";
import UseFBStorage from "./firebaseComponents/UseFBStorage";

const ProgressBar = ({ file, setImgFile, inputData }) => {
  const { fileUrl, progress } = UseFBStorage(file, inputData);
  console.log("Uploading...", progress);
  console.log(file);
  console.log('input data', inputData);

  useEffect(() => {
    if (fileUrl) {
      setImgFile(null);
    }
  }, [fileUrl, setImgFile]);

  return <div className="progress-bar" style={{ width: `${progress}%` }}></div>;
};

export default ProgressBar;
