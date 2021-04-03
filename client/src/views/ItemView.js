import React from "react";
import Header from "../components/Header";
import { appFireStore } from "../firebase/config";

const ItemView = ({ location, match }) => {
  console.log("location", location);
  console.log("match", match.params.id);

  // Get the firestore document from the collection using match.params.id
  const docReference = appFireStore
    .collection("images")
    .doc(`${match.params.id}`);

  const getData = docReference.get().then((snap) => {
    console.log("snap", snap.data());
  });

  return (
    <div>
      <Header />
      <div className="item-title">{JSON.stringify(match.params)}</div>
    </div>
  );
};

export default ItemView;
