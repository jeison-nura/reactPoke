import { Route, Routes } from "react-router-dom";
import Pokemon from "../components/Pokemon/Pokemon";
import PokemonSpec from "../components/Pokemon/PokemonSpec";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Pokemon />} />
      <Route path="/pokemon/:pokemonName" element={<PokemonSpec />} />
    </Routes>
  );
};

export default routes;
