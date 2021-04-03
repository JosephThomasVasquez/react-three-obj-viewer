import React from "react";
import UseFireStore from "../components/firebaseComponents/UseFBStorage";

const ItemView = ({ location, match }) => {
  console.log(location, match);
  return <div className="item-title">{JSON.stringify(match.params)}</div>;
};

export default ItemView;
