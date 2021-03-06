import React, { useState } from "react";
import ErrorMsg from "./ErrorMsg";
import ProgressBar from "./ProgressBar";

const FileUploader = () => {
  const [imgFile, setImgFile] = useState(null);
  const [inputData, setInputData] = useState({
    title: "",
    category: "",
    format: "",
    polyRange: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    // e.preventDefault();

    // const reader = new FileReader();
    // console.log("reader", reader);

    let selectedFile = e.target.files[0];

    const acceptedTypes = ["image/jpeg", "image/png", "image/gif"];

    if (selectedFile && acceptedTypes.includes(selectedFile.type)) {
      // // File previewer using the FileReader method
      // reader.addEventListener("load", () => {
      //   setImgFile(reader.result);
      //   console.log("reader img", reader.result);
      // });

      // reader.readAsDataURL(selectedFile);
      setImgFile(selectedFile);
      console.log("imgFile", imgFile);

      setError("");
    } else {
      setImgFile(null);
      setError(
        `Invalid filetype: Please select a file with type "jpeg", "jpg", "gif", or "png"`
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log("name/val/files:", name, value);

    setInputData({ ...inputData, [name]: value });

    // console.log(inputData);
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();


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
        <label htmlFor="title" className="upload-label">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="upload-title"
          onChange={handleInputChange}
        />
        <label htmlFor="category" className="upload-label">
          Category
        </label>
        <input
          type="checkbox"
          name="category"
          className="upload-checkbox"
          onChange={handleInputChange}
        />
        {error && <ErrorMsg msg={error} />}
        <div className="file-image-display">
          {imgFile && inputData !== '' && <ProgressBar file={imgFile} setImgFile={setImgFile} inputData={inputData} />}
        </div>
        <button type="submit" value="" onClick={handleUploadSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default FileUploader;
