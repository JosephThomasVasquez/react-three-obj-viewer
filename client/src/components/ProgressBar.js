import React, { useState, useEffect } from "react";
import UseFBStorage from "./firebaseComponents/UseFBStorage";

const ProgressBar = ({ file, setImgFile }) => {
  const { url, progress } = UseFBStorage(file);
  console.log("Uploading...", progress);

  useEffect(() => {
    if (url) {
      setImgFile(null);
    }
  }, [url, setImgFile]);

  return <div className="progress-bar" style={{ width: `${progress}%` }}></div>;
};

export default ProgressBar;
