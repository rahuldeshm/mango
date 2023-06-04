import React from "react";
import classes from "./header.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import { productActions } from "../../store/productSlice";

function Header() {
  const dispatch = useDispatch();
  const authorisation = useSelector((state) => state.auth.authorisation);
  const type = useSelector((state) => state.auth.type);
  function merchantLogin() {
    console.log("clicked on merchent");
  }
  const logoutHandler = () => {
    dispatch(authActions.logout());
    dispatch(productActions.logout());
  };
  return (
    <div className={classes.header}>
      <div className={classes.outer}>
        <div
          onClick={merchantLogin}
          className={classes.inner}
          title="click if you are merchant"
        ></div>
      </div>
      <h1>MANGO SEASON</h1>
      <div className={classes.logoutbtn}>
        {!!type && <p>{authorisation.email}</p>}
        <NavLink to="/auth">
          {!!type ? (
            <button onClick={logoutHandler}> Logout</button>
          ) : (
            <button onClick={logoutHandler}>Login</button>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
