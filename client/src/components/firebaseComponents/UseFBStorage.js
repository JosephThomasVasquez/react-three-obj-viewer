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
    storageReference.put(file, metaData).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        console.log("totalBytes", snap.bytesTransferred);
        console.log("metaData", snap.metadata);
        setProgress(percentage);
        console.log("percent", percentage);
      },
      (error) => {
        setError(error);
        console.log("upload Error", error);
      },
      async () => {
        const url = await storageReference.getDownloadURL();
        setFileUrl(url);
        console.log("file url", url);
      }
    );
  }, [file]);

  return { progress, fileUrl, error };
};

export default UseFBStorage;
