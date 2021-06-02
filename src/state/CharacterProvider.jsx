import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { getQuotesByCharacter, getImage } from '../services/futuramaApi';

export const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
  const [quotes, setQuotes] = useState([]);
  const [image, setImage] = useState('');
  const [character, setCharacter] = useState('bender');
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('dark');

  const handleClick = async (event) => {
    event.preventDefault();
    setLoading(true);
    const res = await getQuotesByCharacter(character);
    setQuotes(res);

    setLoading(false);
  };

  const handleChange = ({ target }) => {
    setCharacter(target.value);
  };
  console.log(theme);
  const handleMode = ({ target }) => {
    setTheme(target.value);
  };

  const state = {
    quotes,
    image,
    character,
    loading,
    handleClick,
    handleChange,
    handleMode,
    setImage,
    theme,
    setTheme,
  };

  return (
    <CharacterContext.Provider value={state}>
      {children}
    </CharacterContext.Provider>
  );
};

CharacterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CharacterProvider;
