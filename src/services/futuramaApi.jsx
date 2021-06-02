export const getQuotesByCharacter = async (character) => {
  const res = await fetch(
    `http://futuramaapi.herokuapp.com/api/characters/${character}`
  );
  const json = await res.json();
  console.log(json);
  return json;
};

export const getImage = async (character) => {
  const res = await fetch(
    `http://futuramaapi.herokuapp.com/api/characters/${character}`
  );
  const json = await res.json();
  return json[0].image;
};
