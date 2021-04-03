import React, { useEffect } from "react";
import UseFBStorage from "./firebaseComponents/UseFBStorage";

const ProgressBar = ({ file, setImgFile }) => {
  const { fileUrl, progress } = UseFBStorage(file);
  console.log("Uploading...", progress);
  console.log(file);

  useEffect(() => {
    if (fileUrl) {
      setImgFile(null);
    }
  }, [fileUrl, setImgFile]);

  return <div className="progress-bar" style={{ width: `${progress}%` }}></div>;
};

export default ProgressBar;
