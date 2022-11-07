import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import pokemon from "../../assets/pokemon.png";
import Login from "../Cart/login";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCardButton";

const Header = (props) => {
  const isAuth = useSelector((state) => state.auth.isAunthenticate);
  const [loginShow, setLoginShow] = useState(false);

  const showLogin = () => {
    setLoginShow(true);
  };

  const hideLogin = () => {
    setLoginShow(false);
  };

  useEffect(() => {
    setLoginShow(false);
  }, [isAuth]);

  return (
    <React.Fragment>
      {loginShow && <Login onClose={hideLogin} />}
      <header className={classes.header}>
        <Link to={"/"}>
          <h1>pokemon showdown</h1>
        </Link>
        <HeaderCartButton onShowLogin={showLogin} />
      </header>
      <div className={classes["main-image"]}>
        <img src={pokemon} alt="pokemon logo" />
      </div>
    </React.Fragment>
  );
};

export default Header;
