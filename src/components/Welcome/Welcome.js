import React from "react";
import classes from "./Welcome.module.css";

function Welcome() {
  return (
    <div className={classes.parent}>
      <div className={classes.child}>
        <div className={classes.divani}></div>
      </div>
    </div>
  );
}

export default Welcome;
