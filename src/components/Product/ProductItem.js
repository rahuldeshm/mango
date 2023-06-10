import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./ProductItem.module.css";
import { useSelector } from "react-redux";
import SellerItem from "./SellerItem";
import CostmerItem from "./CostmerItem";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ProductItem = (props) => {
  const type = useSelector((state) => state.auth.type);
  const likes = props.data.likes.length;
  const dislikes = props.data.dislikes.length;
  let ret =
    likes + dislikes > 0 ? parseInt((likes / (likes + dislikes)) * 5) : 0;
  let retting = [];
  for (let i = 0; i < 5; i++) {
    retting.push(
      ret > 0 ? (
        <AiFillStar key={`${i}fill`} />
      ) : (
        <AiOutlineStar key={`${i}empty`} />
      )
    );
    ret--;
  }
  return (
    <div className={styles.itemBox}>
      <Link to={`/product/${props.data.id}`}>
        <div
          className={styles.imgdiv}
          style={{ backgroundImage: `url("${props.data.imglist[1]}")` }}
        ></div>
      </Link>
      <div className={styles.itemDetails}>
        <p>Price: {props.data.price} Rs</p>
        <h4>{props.data.product}</h4>
      </div>
      <div className={styles.details}>
        <p>{`Availability : ${props.data.available} dozen`}</p>
      </div>
      {type === "Seller" && <SellerItem product={props.data} />}
      {type !== "Seller" && <CostmerItem product={props.data} />}
      <div className={styles.ratting}>{retting}</div>
    </div>
  );
};

export default ProductItem;
