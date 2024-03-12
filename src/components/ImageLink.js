import React from 'react';
import { Link } from 'react-router-dom';

const ImageLink = ({ to, imageUrl, altText }) => {
  return (
    <Link to={to}>
      <img src={imageUrl} alt={altText} />
    </Link>
  );
};

export default ImageLink;