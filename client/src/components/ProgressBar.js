import React, { useState, useEffect } from "react";
import UseFBStorage from "./firebaseComponents/UseFBStorage";

const ProgressBar = ({ file, setImgFile }) => {
  const { fileUrl, progress } = UseFBStorage(file);
  console.log("Uploading...", progress);

  useEffect(() => {
    if (fileUrl) {
      setImgFile(null);
    }
  }, [fileUrl, setImgFile]);

  return <div className="progress-bar" style={{ width: `${progress}%` }}></div>;
};

export default ProgressBar;
