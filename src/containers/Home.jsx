import React, { useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
import QuotesList from '../components/quotes/QuotesList';
import Buttons from '../components/controls/Buttons';
import Image from '../components/controls/Image';
import { CharacterContext } from '../state/CharacterProvider';
import { getImage } from '../services/futuramaApi';
import styles from '../components/app/App.css';

export default function Home() {
  const {
    handleClick,
    handleChange,
    image,
    loading,
    quotes,
    character,
    setImage,
    theme,
    setTheme,
    handleMode,
  } = useContext(CharacterContext);

  useEffect(() => {
    getImage(character).then(setImage);
  }, [character]);

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <main
      className={`${theme === 'light' ? styles.lightMode : styles.darkMode}`}
    >
      <Buttons
        onSubmit={handleClick}
        onChange={handleChange}
        modeChange={handleMode}
      />
      <Image image={image} />
      <QuotesList quotes={quotes} />
    </main>
  );
}

// Home.propTypes = {};
