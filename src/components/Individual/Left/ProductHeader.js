import React from "react";
import classes from "./ProductHeader.module.css";

function ProductHeader(props) {
  return (
    <div className={classes.productheader}>
      <h2>{`${props.product.price} Rs`}</h2>
      <h2>{`Available Dozens : ${props.product.available} `}</h2>
    </div>
  );
}

export default ProductHeader;
