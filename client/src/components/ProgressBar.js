import React, { useState } from "react";
import UseFBStorage from "./firebaseComponents/UseFBStorage";

const ProgressBar = ({ file, setImgFile }) => {

  const { url, progress } = UseFBStorage(file);
  console.log('Uploading...', progress, url)

  return <div className="progress-bar">Progress Bar</div>;
};

export default ProgressBar;
