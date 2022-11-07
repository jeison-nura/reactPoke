const fetchPokemons = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_POKEMON_URL_BASE}pokemon`
  );
  const data = await response.json();
  console.log(data, "me llame mas de una vez");
  return data;
};

const fetchPagePokemon = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data, "me llame mas de una vez");
  return data;
};

const fetchPokemon = async (pokemon) => {
  const response = await fetch(
    `${process.env.REACT_APP_POKEMON_URL_BASE}pokemon/${pokemon}`
  );
  if (!response.ok) {
    throw Error(response.status);
  }
  const data = await response.json();
  console.log(data);
  return data;
};

export { fetchPokemons, fetchPokemon, fetchPagePokemon };
