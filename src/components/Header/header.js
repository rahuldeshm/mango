import React from "react";
import { BsPersonFill } from "react-icons/bs";
import classes from "./header.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";

function Header() {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const type = useSelector((state) => state.auth.type);
  const onlyemail = email.slice(0, email.length - 8);
  function merchantLogin() {
    console.log("clicked on merchent");
  }
  const logoutHandler = () => {
    dispatch(authActions.logout());
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
        {!!type && (
          <div>
            <BsPersonFill />
            <p>{onlyemail}</p>
          </div>
        )}
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
