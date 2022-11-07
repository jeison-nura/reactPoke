import classes from "./pokeItem.module.css";

const PokeItem = (props) => {
  return <div className={classes.PokeItem}>{props.name}</div>;
};

export default PokeItem;
