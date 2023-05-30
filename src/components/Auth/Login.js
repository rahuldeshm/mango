import React from "react";
import classes from "./SignUp.module.css";
import { FaLock, FaUser } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useState } from "react";
import useAuth from "./../Hooks/useAuth";

function Login(props) {
  const [setAuthorisation] = useAuth();
  const [loginas, setLoginas] = useState("Login");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const signupHandler = (e) => {
    e.preventDefault();
    setAuthorisation({ email, password: pass, loginas, signup: false });
  };
  return (
    <div className={classes.container}>
      <div className={classes.from}>
        <h2>Login</h2>
        <div className={classes.inputbox}>
          <select
            onChange={(e) => setLoginas(e.target.value)}
            required
            defaultValue={"Login"}
          >
            <option>Login</option>
            <option>Seller</option>
          </select>
          <MdLocalShipping className={classes.icon} />
          <span>type</span>
        </div>
        <div className={classes.inputbox}>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FaUser className={classes.icon} />
          <span>Email :</span>
        </div>
        <div className={classes.inputbox}>
          <input
            type="Password"
            onChange={(e) => setPass(e.target.value)}
            required
          />
          <FaLock className={classes.icon} />
          <span>Password :</span>
        </div>

        <div className={classes.inputbox}>
          <input onClick={signupHandler} type="submit" value="Login" />
        </div>
        <p onClick={props.onClick}>new here SignUp</p>
      </div>
    </div>
  );
}

export default Login;
