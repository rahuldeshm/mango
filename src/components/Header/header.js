import React from "react";
import classes from "./header.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authorised = useSelector((state) => state.auth.authorised);
  const type = useSelector((state) => state.auth.type);
  function merchantLogin() {
    console.log("clicked on merchent");
  }
  const logoutHandler = () => {
    const item = type === "Seller" ? "authorisedSeller" : "authorisedLogin";
    localStorage.removeItem(item);
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

      {authorised && (
        <NavLink to="/auth">
          <button onClick={logoutHandler}> Logout</button>
        </NavLink>
      )}
    </div>
  );
}

export default Header;
