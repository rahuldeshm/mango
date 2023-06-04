import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./ProductItem.module.css";
import { useSelector } from "react-redux";
import SellerItem from "./SellerItem";
import CostmerItem from "./CostmerItem";

const ProductItem = (props) => {
  const type = useSelector((state) => state.auth.type);
  const likes = 5;
  const dislikes = 3;
  let ret = parseInt((likes / (likes + dislikes)) * 5);
  let retting = [];
  for (let i = 0; i < 5; i++) {
    retting.push(ret > 0 ? <AiFillStar /> : <AiOutlineStar />);
    ret--;
  }
  return (
    <div className={styles.itemBox}>
      <div
        className={styles.imgdiv}
        style={{ backgroundImage: `url("${props.data.imglist[1]}")` }}
      ></div>
      <div className={styles.itemDetails}>
        <p>Price: {props.data.price} Rs</p>
        <h4>{props.data.product}</h4>
      </div>
      <div className={styles.details}>
        <p>{`Availability : ${props.data.available} dozen`}</p>
      </div>
      {type === "Seller" && <SellerItem />}
      {type !== "Seller" && <CostmerItem />}
      <div className={styles.ratting}>{retting}</div>
    </div>
  );
};

export default ProductItem;
