import { useNavigate } from "react-router-dom";
import classes from "./CardButton.module.css";

const CardButton = ({ name, children }) => {
  const navigate = useNavigate();
  const redirectPokemon = () => {
    navigate(`pokemon/${name}`);
  };
  return (
    <button className={classes.card} onClick={redirectPokemon}>
      <span>{children}</span>
    </button>
  );
};

export default CardButton;
