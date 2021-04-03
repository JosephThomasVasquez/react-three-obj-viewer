import { useState, useEffect } from "react";
import { appFireStore } from "../../firebase/config";

const UseFireStore = (collection) => {
  const [firestoreDocs, setFirestoreDocs] = useState([]);

  useEffect(() => {
      
    const unSubscribe = appFireStore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });

        setFirestoreDocs(documents);
        // console.log(documents);
      });

    return () => unSubscribe();
  }, [collection]);

  return { firestoreDocs };
};

export default UseFireStore;
