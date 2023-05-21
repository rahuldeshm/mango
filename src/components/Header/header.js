import React from "react";
import classes from "./header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  function merchantLogin() {
    console.log("clicked on merchent");
  }
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
      <NavLink to="/auth">
        <button>Login</button>
      </NavLink>
    </div>
  );
}

export default Header;
