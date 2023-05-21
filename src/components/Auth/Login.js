import React from "react";
import classes from "./SignUp.module.css";
import { FaLock, FaUser } from "react-icons/fa";

function Login(props) {
  return (
    <div className={classes.container}>
      <div className={classes.from}>
        <h2>Login</h2>
        <div className={classes.inputbox}>
          <select required>
            <option selected>Login</option>
            <option>Login as a Merchant</option>
          </select>
          <FaLock className={classes.icon} />
          <span>type</span>
        </div>
        <div className={classes.inputbox}>
          <input type="text" required />
          <FaUser className={classes.icon} />
          <span>Email :</span>
        </div>
        <div className={classes.inputbox}>
          <input type="Password" required />
          <FaLock className={classes.icon} />
          <span>Password :</span>
        </div>

        <div className={classes.inputbox}>
          <input type="submit" value="Login" />
        </div>
        <p onClick={props.onClick}>new here SignUp</p>
      </div>
    </div>
  );
}

export default Login;
