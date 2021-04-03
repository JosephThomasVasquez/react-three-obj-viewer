import React, { useState } from "react";
import UseFBStorage from "./firebaseComponents/UseFBStorage";

const ProgressBar = ({ file, setImgFile }) => {
  const { url, progress } = UseFBStorage(file);
  console.log("Uploading...", progress);

  return <div className="progress-bar" style={{ width: `${progress}%` }}></div>;
};

export default ProgressBar;
