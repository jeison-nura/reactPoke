import { useParams } from "react-router-dom";
import classes from "./PokemonSpec.module.css";
import Card from "../UI/Card";
import React, { useEffect, useState } from "react";
import { fetchPokemon } from "../../API/pokemons";
const PokemonSpec = () => {
  let pokemonName = useParams().pokemonName;

  const [infoPoke, setInfoPoke] = useState({});
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSpecPokemon = async () => {
      try {
        const results = await fetchPokemon(pokemonName);
        setInfoPoke(results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getSpecPokemon();
  }, [pokemonName]);

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

  const stats = () => {
    const statsPokemon = infoPoke.stats;
    const view = statsPokemon.map((value) => {
      return (
        <li key={value.stat.name}>
          {value.stat.name} : {value.base_stat}
        </li>
      );
    });
    return <ul>{view}</ul>;
  };

  return (
    <section className={classes.PokeSpec}>
      <Card>
        <img
          src={infoPoke.sprites.other["official-artwork"].front_default}
          alt="pokeImage"
        />
        <div>
          <h1>{pokemonName}</h1>
          {stats()}
        </div>
      </Card>
    </section>
  );
};

export default PokemonSpec;
