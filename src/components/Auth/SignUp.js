import React, { useState } from "react";
import classes from "./SignUp.module.css";
import { FaUser, FaLock } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import useAuth from "../Hooks/useAuth";

function SignUp(props) {
  const [setAuthorisation] = useAuth();
  const [loginas, setLoginas] = useState("Login");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cpass, setCpass] = useState("");
  const signupHandler = (e) => {
    e.preventDefault();
    if (cpass === pass) {
      setAuthorisation({ email, password: pass, loginas, signup: true });
    } else {
      alert("Password and confirm password doesn't match..!");
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.from}>
        <h2>SignUp</h2>
        <div className={classes.inputbox}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            required
          />
          <FaUser className={classes.icon} />
          <span>Email</span>
        </div>
        <div className={classes.inputbox}>
          <input
            onChange={(e) => setPass(e.target.value)}
            type="Password"
            required
          />
          <FaLock className={classes.icon} />
          <span>Password</span>
        </div>
        <div className={classes.inputbox}>
          <input
            onChange={(e) => setCpass(e.target.value)}
            type="Password"
            required
          />
          <FaLock className={classes.icon} />
          <span>Confirm Password</span>
        </div>
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
            onClick={(e) => signupHandler(e)}
            type="submit"
            value="Sign Up"
          />
        </div>
        <p onClick={props.onClick}>Already a user Login</p>
      </div>
    </div>
  );
}

export default SignUp;
