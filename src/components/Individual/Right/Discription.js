import React from "react";
import classes from "./Discription.module.css";

function Discription(props) {
  return (
    <div className={classes.discription}>
      <h4>{`Product of : ${props.product.email}`}</h4>
      <h5>{props.product.discription}</h5>
    </div>
  );
}

export default Discription;
