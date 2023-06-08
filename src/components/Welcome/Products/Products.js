import React from "react";
import HOCtofilter from "./../../HOC/HOCtofilter";
import ProductItem from "../../Product/ProductItem";
import classes from "./Products.module.css";

function Products(props) {
  return (
    <div className={classes.main}>
      {props.data.map((e) => {
        return <ProductItem key={e.id} data={e} />;
      })}
    </div>
  );
}

const EnhancedProducts = HOCtofilter(Products, "products");
export default EnhancedProducts;
