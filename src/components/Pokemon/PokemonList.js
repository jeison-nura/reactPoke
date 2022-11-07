import React, { useEffect, useState } from "react";
import { fetchPagePokemon, fetchPokemons } from "../../API/pokemons";
import Card from "../UI/Card";
import CardButton from "../UI/CardButton";
import PokeItem from "./pokeItem/PokeItem";
import classes from "./PokemonList.module.css";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextItem, setNextItem] = useState();
  const [prevItem, setPrevItem] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const callGetPokemons = async () => {
    try {
      const results = await fetchPokemons();
      setPokemons(results.results);
      setNextItem(results.next);
      setPrevItem(results.previous);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    callGetPokemons();
  }, []);

  const nextHandler = async () => {
    setLoading(true);
    const data = await fetchPagePokemon(nextItem);
    setPokemons(data.results);
    setNextItem(data.next);
    setPrevItem(data.previous);
    setLoading(false);
  };

  const prevHandler = async () => {
    setLoading(true);
    const data = await fetchPagePokemon(prevItem);
    setPokemons(data.results);
    setNextItem(data.next);
    setPrevItem(data.previous);
    setLoading(false);
  };

  let pokelist = [];
  if (pokemons.length !== 0) {
    pokelist = pokemons.map((pokemon) => (
      <CardButton key={pokemon.name} name={pokemon.name}>
        <PokeItem name={pokemon.name} />
      </CardButton>
    ));
  }

  if (loading) {
    return (
      <section className={classes.PokeSpecLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.PokeSpecError}>
        <Card>
          <span>{error}</span>
        </Card>
      </section>
    );
  }

  return (
    <React.Fragment>
      <section className={classes.pokeItem}>{pokelist}</section>
      <div className={classes.btn}>
        {prevItem && <button onClick={prevHandler}>prev</button>}
        {nextItem && <button onClick={nextHandler}>next</button>}
      </div>
    </React.Fragment>
  );
};

export default PokemonList;
