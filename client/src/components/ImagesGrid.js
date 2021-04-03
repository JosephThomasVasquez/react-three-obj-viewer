import React from "react";

const ImagesGrid = () => {
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
        
      </div>
    </div>
  );
};

export default ImagesGrid;
