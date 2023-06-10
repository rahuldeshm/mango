import React, { useState } from "react";
import classes from "./Individual.module.css";
import Footer from "./../../Footer/Footer";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ImageSlider from "./Left/ImageSlider";
import ProductHeader from "./Left/ProductHeader";
import ProductTitle from "./Left/ProductTitle";
import SellerItem from "../Product/SellerItem";
import CostmerItem from "../Product/CostmerItem";
import Discription from "./Right/Discription";
import Return from "./Right/Return";
import NewComments from "./Right/NewComment";

function Individual() {
  const type = useSelector((state) => state.auth.type);
  const params = useParams();
  const products = useSelector((state) => state.product.products);
  const product = { ...products[params.id], id: params.id };

  return (
    <>
      <ProductTitle product={product} />
      <div className={classes.maincontainer}>
        <div className={classes.slidermain}>
          <ImageSlider list={product.imglist} />
          <ProductHeader product={product} />
          {type === "Seller" ? (
            <SellerItem product={product} />
          ) : (
            <CostmerItem product={product} />
          )}
        </div>
        <div className={classes.description}>
          <Discription product={product} />
          <Return product={product} />
          <NewComments product={product} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Individual;
