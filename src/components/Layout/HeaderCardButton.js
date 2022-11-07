import { useDispatch, useSelector } from "react-redux";
import LoginIcon from "../Cart/loginIcon";
import classes from "./HeaderCardButton.module.css";
import { authActions } from "../../store/auth";

const HeaderCartButton = (props) => {
  const isAuth = useSelector((state) => state.auth.isAunthenticate);
  const dispatch = useDispatch();
  console.log(isAuth);
  const logOutHanlder = () => {
    dispatch(authActions.logout());
  };
  return (
    <button
      className={classes.button}
      onClick={isAuth ? logOutHanlder : props.onShowLogin}
    >
      <span className={classes.icon}>
        <LoginIcon />
      </span>
      <span>{!isAuth ? "Login" : "Logout"}</span>
    </button>
  );
};

export default HeaderCartButton;
