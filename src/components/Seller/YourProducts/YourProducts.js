import React from "react";
import classes from "./YourProducts.module.css";
import { useSelector } from "react-redux";
import ProductItem from "./../../Product/ProductItem";

function YourProducts() {
  const productList = useSelector((state) => state.product.products);
  return (
    <div className={classes.main}>
      {productList.map((e) => {
        console.log(e.id);
        return <ProductItem key={`${e.id}it`} data={e} />;
      })}
    </div>
  );
}

export default YourProducts;
