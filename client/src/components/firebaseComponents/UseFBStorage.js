import React, { useState, useEffect } from "react";
import ErrorMsg from "../ErrorMsg";
import { appStorage, appFireStore, timestamp } from "../../firebase/config";

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
    const collectionReference = appFireStore.collection("images");

    // uploads the file to FireBase storage
    storageReference.put(file, metaData).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
        console.log("percent", percentage);
      },
      (error) => {
        setError(error);
        console.log("upload Error", error);
      },
      async () => {
        const fileUrl = await storageReference.getDownloadURL();
        const createdAt = timestamp();
        collectionReference.add({ fileUrl, createdAt });
        setFileUrl(fileUrl);
      }
    );
  }, [file]);

  return { progress, fileUrl, error };
};

export default UseFBStorage;
