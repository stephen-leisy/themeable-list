import React from 'react';
import PropTypes from 'prop-types';

const LightMode = ({ modeChange }) => (
  <>
    <input
      onClick={modeChange}
      type="radio"
      id="light"
      name="theme"
      value="light"
    />
    <label htmlFor="light">Change to light mode</label>
  </>
);

export default LightMode;
