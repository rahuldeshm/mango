import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import classes from "./ProductTitle.module.css";

function ProductTitle(props) {
  const likes = !!props.product.likes ? props.product.likes.length : 0;
  const dislikes = !!props.product.dislikes ? props.product.dislikes.length : 0;
  let ret = parseInt((likes / (likes + dislikes)) * 5);
  let retting = [];
  for (let i = 0; i < 5; i++) {
    retting.push(
      ret > 0 ? (
        <AiFillStar key={`${i}fill`} className={classes.icon} />
      ) : (
        <AiOutlineStar key={`${i}empty`} className={classes.icon} />
      )
    );
    ret--;
  }
  return (
    <div className={classes.producttitle}>
      <h2>{props.product.product}</h2>
      <div className={classes.ratting}>{retting}</div>
    </div>
  );
}

export default ProductTitle;
