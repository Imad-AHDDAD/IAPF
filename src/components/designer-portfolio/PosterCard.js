import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

function PosterCard(props) {
  const images = props.images
  const [imageIndex, setImageIndex] = useState(0);
  const next = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex(Number(imageIndex) + 1);
    }
  };
  const previous = () => {
    if (imageIndex > 0) {
      setImageIndex(Number(imageIndex) - 1);
    }
  };
  return (
    <div className="card">
      <div className="slider">
        <div className="images">
          <div className="slider-image">
            <img src={images[imageIndex]} alt="image1" />
          </div>
        </div>
        <button onClick={next} className="next">
          <FontAwesomeIcon icon={faRightLong} className="next-icon" />
        </button>
        <button onClick={previous} className="previous">
          <FontAwesomeIcon icon={faLeftLong} className="next-icon" />
        </button>
        <div className="imagesNumber">
            {images.length} images
        </div>
      </div>

      <h1 className="title">{props.title}</h1>
    </div>
  );
}

export default PosterCard;
