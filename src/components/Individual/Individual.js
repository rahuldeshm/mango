import React, { useState } from "react";
import classes from "./Individual.module.css";
import Footer from "./../../Footer/Footer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ImageSlider from "./ImageSlider";
import ProductHeader from "./ProductHeader";

function Individual() {
  const [counter, setCounter] = useState();
  const params = useParams();
  const products = useSelector((state) => state.product.products);
  const product = products.filter((e) => e.id === params.id)[0];
  console.log(product);

  return (
    <>
      <div className={classes.maincontainer}>
        <div className={classes.slidermain}>
          <ImageSlider list={product.imglist} />
          <ProductHeader product={product} />
        </div>
        <div className={classes.description}>
          <h2>{product.discription}</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Individual;
