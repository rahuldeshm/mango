import React from "react";
import classes from "./SignUp.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

function SignUp(props) {
  return (
    <div className={classes.container}>
      <div className={classes.from}>
        <h2>SignUp</h2>
        <div className={classes.inputbox}>
          <input type="text" required />
          <FaUser className={classes.icon} />
          <span>Email</span>
        </div>
        <div className={classes.inputbox}>
          <input type="Password" required />
          <FaLock className={classes.icon} />
          <span>Password</span>
        </div>
        <div className={classes.inputbox}>
          <input type="Password" required />
          <FaLock className={classes.icon} />
          <span>Confirm Password</span>
        </div>
        <div className={classes.inputbox}>
          <select required>
            <option selected>Login</option>
            <option>Login as a Merchant</option>
          </select>
          <MdLocalShipping className={classes.icon} />
          <span>type</span>
        </div>
        <div className={classes.inputbox}>
          <input type="submit" value="Sign Up" />
        </div>
        <p onClick={props.onClick}>Already a user Login</p>
      </div>
    </div>
  );
}

export default SignUp;
