import React, { useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
import QuotesList from '../components/quotes/QuotesList';
import Buttons from '../components/controls/Buttons';
import Image from '../components/controls/Image';
import { CharacterContext } from '../state/CharacterProvider';
import { getImage } from '../services/futuramaApi';
import styles from '../components/app/App.css';
import DarkMode from '../components/controls/DarkMode';
import LightMode from '../components/controls/LightMode';

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
    count,
    handleMode,
  } = useContext(CharacterContext);

  useEffect(() => {
    getImage(character).then(setImage);
  }, [character, theme]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return count % 2 == 0 ? (
    <main
      className={`${theme === 'light' ? styles.lightMode : styles.darkMode}`}
    >
      <header>
        <DarkMode modeChange={handleMode} />
      </header>
      <section>
        <Buttons onSubmit={handleClick} onChange={handleChange} />
        <Image image={image} />
        <QuotesList quotes={quotes} />
      </section>
    </main>
  ) : (
    <main
      className={`${theme === 'light' ? styles.lightMode : styles.darkMode}`}
    >
      <header>
        <LightMode modeChange={handleMode} />
      </header>
      <section>
        <Buttons onSubmit={handleClick} onChange={handleChange} />

        <Image image={image} />
        <QuotesList quotes={quotes} />
      </section>
    </main>
  );
}

// Home.propTypes = {};
