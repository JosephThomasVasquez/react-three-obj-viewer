import React, { useState, useEffect } from "react";
import ErrorMsg from "../ErrorMsg";
import { appStorage } from "../../firebase/config";

const UseFBStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    // References
    const storageReference = appStorage.ref(file.name);

    // uploads the file to FireBase storage
    storageReference.put().on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransfered / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (error) => {
        setError(error);
      },
      async () => {
        const url = await storageReference.getDownloadURL();
        setFileUrl(url);
      }
    );
  }, [file]);

  return { progress, fileUrl, error };
};

export default UseFBStorage;
