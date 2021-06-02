import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ onSubmit, onChange, modeChange }) {
  return (
    <form>
      <button onClick={onSubmit}>get quotes</button>
      <select onChange={onChange}>
        <option value="bender">Bender</option>
        <option value="fry">Fry</option>
        <option value="leela">Leela</option>
        <option value="professor-farnsworth">Professor Farnsworth</option>
        <option value="amy">Amy</option>
        <option value="zapp-brannigan">Zapp Brannigan</option>
      </select>
      <select onClick={modeChange}>
        <option value="light">light mode</option>
        <option value="dark">dark mode</option>
      </select>
    </form>
  );
}

Buttons.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  modeChange: PropTypes.func.isRequired,
};

export default Buttons;
