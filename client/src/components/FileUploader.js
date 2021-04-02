import React, { useState, useEffect } from "react";
import ErrorMsg from "./ErrorMsg";

const FileUploader = () => {
  const [imgFile, setImgFile] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {}, [imgFile]);

  const handleChange = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    console.log("reader", reader);

    let selectedFile = e.target.files[0];

    const acceptedTypes = ["image/jpeg", "image/png", "image/gif"];

    if (selectedFile && acceptedTypes.includes(selectedFile.type)) {
      reader.addEventListener("load", () => {
        setImgFile(reader.result);
        console.log("reader img", reader.result);
      });
      reader.readAsDataURL(selectedFile);
      // setImgFile(selectedFile);
      console.log("imgFile", imgFile);
      // console.log("SelectedFile", selectedFile);
      setError("");
    } else {
      setImgFile(null);
      setError(
        `Invalid filetype: Please select a file with type "jpeg", "jpg", "gif", or "png"`
      );
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
        <div className="file-image-display">
          {imgFile && <img src={imgFile} alt={imgFile} />}
        </div>
      </form>
    </div>
  );
};

export default FileUploader;
