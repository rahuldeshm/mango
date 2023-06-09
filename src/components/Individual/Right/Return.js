import React from "react";
import classes from "./Return.module.css";
import image from "./../../../Images/return.jpg";

function Return(props) {
  return (
    <div className={classes.return}>
      <img src={image} alt="Return" />
      <div>
        <h3>{`Return ${
          props.product.canReturn ? "Available" : "NOT Available"
        }`}</h3>
        <p>{props.product.condition}</p>
      </div>
    </div>
  );
}

export default Return;
