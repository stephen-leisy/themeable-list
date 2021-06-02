import React from 'react';
import PropTypes from 'prop-types';

function Image({ image }) {
  return (
    <>
      <img src={image} height="180px" width="150px" />
    </>
  );
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Image;
