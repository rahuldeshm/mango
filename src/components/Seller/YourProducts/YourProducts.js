import React from "react";
import classes from "./YourProducts.module.css";
import { useSelector } from "react-redux";
import ProductItem from "./../../Product/ProductItem";
import HOCtofilter from "./../../HOC/HOCtofilter";

function YourProducts(props) {
  const email = useSelector((state) => state.auth.email);
  const list = props.data.filter((e) => e.email === email);
  return (
    <div className={classes.main}>
      {list.map((e) => {
        return <ProductItem key={`${e.id}it`} data={e} />;
      })}
    </div>
  );
}
const EnhancedYourProduct = HOCtofilter(YourProducts);

export default EnhancedYourProduct;
