import React from "react";
import classes from "./Loader.module.css";

function Loader() {
  return (
    <div className={classes.parent}>
      <div className={classes.child}>
        <div className={classes.loader}></div>
        <h1 className={classes.text}>Loading...</h1>
      </div>
    </div>
  );
}

export default Loader;
