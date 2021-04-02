import React, { useState } from "react";
import ErrorMsg from "./ErrorMsg";

const FileUploader = () => {
  const [imgFile, setImgFile] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    let selectedFile = e.target.files[0];

    const acceptedTypes = ["image/jpeg", "image/png", "image/gif"];

    if (selectedFile && acceptedTypes.includes(selectedFile.type)) {
      setImgFile(selectedFile);
      console.log("Accepted", selectedFile);
    } else {
      setImgFile(null);
      setError(
        `Invalid filetype: Please select a file with type "jpeg", "jpg", "gif", or "png"`
      );
      console.log("Not Allowed filetype", selectedFile);
    }
  };

  return (
    <div className="container">
      <form>
        <input
          type="file"
          name="image"
          className="img-file-selector"
          onChange={handleChange}
        />
        {error && <ErrorMsg msg={error} />}
        <div className="file-display"></div>
      </form>
    </div>
  );
};

export default FileUploader;
