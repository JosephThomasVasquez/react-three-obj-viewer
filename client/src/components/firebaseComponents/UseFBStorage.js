import React, { useState, useEffect } from "react";
import ErrorMsg from "../ErrorMsg";
import { appStorage } from "../../firebase/config";

const UseFBStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  useEffect(() => {
    console.log("file", file);

    const metaData = {
      contentType: file.type,
    };

    // References
    const storageReference = appStorage.ref().child(`images/${file.name}`);

    // uploads the file to FireBase storage
    storageReference
      .put(file, metaData)
      .then((snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        console.log("totalBytes", snap.totalBytes);
        console.log("metaData", snap.metadata);
        setProgress(percentage);

        snap.ref.getDownloadURL().then((url) => {
          setFileUrl(url);
        });
      })
      .catch((error) => {
        setError(error);
        console.log("upload Error", error);
      });
  }, [file]);

  return { progress, fileUrl, error };
};

export default UseFBStorage;
