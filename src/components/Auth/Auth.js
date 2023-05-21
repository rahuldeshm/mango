import React, { useState } from "react";
import Login from "./Login";
import classes from "./Auth.module.css";
import SignUp from "./SignUp";

function Auth() {
  const [authToggle, setAuthToggle] = useState(true);
  return (
    <div className={classes.main}>
      <image src="https://a-z-animals.com/media/2023/04/shutterstock_546330160.jpg" />
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
