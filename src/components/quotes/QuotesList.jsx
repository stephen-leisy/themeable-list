import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

const QuotesList = ({ quotes }) => {
  return (
    <ul>
      {quotes.map(({ quote, image }) => (
        <li key={quote}>
          <Quote quote={quote} image={image} />
        </li>
      ))}
    </ul>
  );
};

QuotesList.propTypes = {
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default QuotesList;
