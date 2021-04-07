import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { appFireStore } from "../firebase/config";

const ItemView = ({ location, match }) => {
  const [docData, setDocData] = useState({
    fileUrl: "",
    createdAt: "",
  });

  // console.log("location", location);
  // console.log("match", match.params.id);

  // Get the firestore document from the collection using match.params.id
  const docReference = appFireStore
    .collection("images")
    .doc(`${match.params.id}`);

  useEffect(() => {
    docReference.get().then((snap) => {
      console.log("snap", snap.data());

      setDocData({ ...snap.data(), fileUrl: snap.data().fileUrl });
      // console.log("Doc Data", docData);
    });
  }, [match.params.id]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="item-grid-container">
          <div className="item-title">{match.params.id}</div>
          <img src={docData.fileUrl} alt="" className="item-img-display"/>
        </div>
      </div>
    </div>
  );
};

export default ItemView;
