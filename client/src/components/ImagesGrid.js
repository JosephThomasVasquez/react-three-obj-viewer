import React from "react";
import UseFireStore from "./firebaseComponents/UseFireStore";

const ImagesGrid = () => {
  const { firestoreDocs } = UseFireStore("images");

  return (
    <div className="container">
      <div className="grid-container">
        <picture className="image-grid-item">
          <source
            media="(min-width:650px)"
            srcSet="https://source.unsplash.com/random"
          />
          <img
            src="https://source.unsplash.com/random"
            alt=""
            className="grid-img"
          />
          <section className="grid-image-title">This is the Title</section>
        </picture>
        {firestoreDocs.map((doc) => (
          <picture className="image-grid-item" key={doc.id}>
            <source
              media="(min-width:650px)"
              srcSet={doc.fileUrl}
            />
            <img
              src={doc.fileUrl}
              alt={doc.fileUrl}
              className="grid-img"
            />
            <section className="grid-image-title">{doc.id}</section>
          </picture>
        ))}
      </div>
    </div>
  );
};

export default ImagesGrid;
