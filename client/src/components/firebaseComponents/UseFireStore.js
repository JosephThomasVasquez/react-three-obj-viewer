import React, { useState, useEffect } from "react";
import ErrorMsg from "../ErrorMsg";
import { appStorage, appFireStore, timestamp } from "../../firebase/config";

const UseFireStore = (collection) => {
  const [firestoreDocs, setFirestoreDocs] = useState([]);

  useEffect(() => {
    appFireStore.collection(collection).orderBy('createdAt', 'desc').onSnapshot((snap) => {
      let documents = [];
      snap.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });

      setFirestoreDocs(documents);
      console.log(documents);
    });
  }, [collection]);

  return { firestoreDocs };
};

export default UseFireStore;