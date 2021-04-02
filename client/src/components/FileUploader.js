import React, { useState } from "react";

const FileUploader = () => {
  const [imgFile, setImgFile] = useState(null);

  const handleChange = (e) => {
    let selectedFile = e.target.files[0];

    const acceptedTypes = ["image/jpeg", "image/png", "image/gif"];

    if (selectedFile && acceptedTypes.includes(selectedFile.type)) {
      setImgFile(selectedFile);
      console.log("Accepted", selectedFile);
    } else {
      setImgFile(null);
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
      </form>
    </div>
  );
};

export default FileUploader;
