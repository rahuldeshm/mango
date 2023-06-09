import React from "react";
import classes from "./ProductHeader.module.css";

function ProductHeader(props) {
  return (
    <div className={classes.productheader}>
      <h1>{props.product.product}</h1>
      <input type="number" />
      <button>Add to cart</button>
    </div>
  );
}

export default ProductHeader;
