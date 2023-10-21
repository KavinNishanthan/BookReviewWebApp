import React from 'react';
import './ImageOverLay.css'; // Import your CSS file for styling

const ImageOverLay = ({ imageUrl, text }) => {
  return (
    <div className="image-overlay-container">
      <img src={imageUrl} alt="Image" className="image-overlay" />
      <div className="overlay-text">{text}</div>
    </div>
  );
};

export default ImageOverLay;
