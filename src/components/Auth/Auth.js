import React, { useState } from "react";
import Login from "./Login";
import classes from "./Auth.module.css";
import SignUp from "./SignUp";

function Auth() {
  const [authToggle, setAuthToggle] = useState(false);
  return (
    <div className={classes.main}>
      {authToggle ? (
        <SignUp
          onClick={() => setAuthToggle(!authToggle)}
          className={classes.animation}
        />
      ) : (
        <Login
          onClick={() => setAuthToggle(!authToggle)}
          className={classes.animation}
        />
      )}
    </div>
  );
}

export default Auth;
