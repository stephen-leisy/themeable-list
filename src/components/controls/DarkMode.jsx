import React from 'react';
import PropTypes from 'prop-types';
import styles from '../app/App.css';

const DarkMode = ({ modeChange }) => (
  <>
    <input
      className={styles.btn}
      onClick={modeChange}
      id="dark"
      type="radio"
      name="theme"
      value="dark"
    />
    <label htmlFor="dark">Change to dark mode</label>
  </>
);

export default DarkMode;
