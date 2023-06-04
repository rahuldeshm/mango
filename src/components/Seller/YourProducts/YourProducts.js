import React from "react";
import classes from "./YourProducts.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../Hooks/useFetch";
import ProductItem from "./ProductItem";

function YourProducts() {
  const productList = useSelector((state) => state.product.products);
  return (
    <div className={classes.main}>
      {productList.map((e) => (
        <ProductItem key={e.id} data={e} />
      ))}
    </div>
  );
}

export default YourProducts;
