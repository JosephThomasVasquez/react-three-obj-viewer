import React from "react";

const ItemView = ({ location, match }) => {
  console.log(location, match);
  return <div className="item-title">{JSON.stringify(match)}</div>;
};

export default ItemView;
