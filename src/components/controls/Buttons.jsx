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
      <input
        onClick={modeChange}
        id="light"
        type="radio"
        name="theme"
        value="light"
      />
      <label htmlFor="light">light mode</label>
      <input onClick={modeChange} type="radio" name="theme" value="dark" />
      <label htmlFor="dark">dark mode</label>
    </form>
  );
}

Buttons.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  modeChange: PropTypes.func.isRequired,
};

export default Buttons;
