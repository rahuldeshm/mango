import React, { useState, useEffect } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import classes from "./CostmerItem.module.css";
import useFetch from "./../Hooks/useFetch";
import { productActions } from "../../store/productSlice";
import { useDispatch, useSelector } from "react-redux";

function CostmerItem(props) {
  //receiving props.product
  const [liked, setLiked] = useState(false);
  const [disliked, setDisLiked] = useState(false);
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const [fetchHandler] = useFetch();
  const [toggle, setToggle] = useState(true);
  const [enteredValue, setEnteredValue] = useState("");
  let likes = [...props.product.likes];
  let dislikes = [...props.product.dislikes];
  useEffect(() => {
    if (likes.includes(email)) {
      setLiked(true);
    }
    if (dislikes.includes(email)) {
      setDisLiked(true);
    }
  }, []);
  const inputstyle = toggle
    ? { width: "2%", background: "rgb(143, 170, 143)", border: "none" }
    : { width: "70%" };
  const buttonstyle = toggle ? { width: "98%" } : { width: "30%" };
  const buttont = toggle ? "Add to Cart" : "Submit";
  const addtoCartHandler = () => {
    if (!toggle) {
      console.log("Added to cart functionallity remained");
      setToggle(!toggle);
      setEnteredValue("");
    } else {
      setToggle(!toggle);
    }
  };
  const likeHandler = () => {
    if (!!email) {
      if (liked) {
        likes = likes.filter((e) => e !== email);
        setLiked(false);
      } else {
        likes.push(email);
        setLiked(true);
      }
      const lproduct = { ...props.product, likes };
      fetchHandler("products", "PUT", "", lproduct, lproduct.id).then(
        (dataname) => {
          dispatch(
            productActions.addNewProduct({
              id: dataname.id,
              product: dataname,
            })
          );
        }
      );
    } else alert("Login to Like the product");
  };
  const dislikeHandler = () => {
    if (!!email) {
      if (disliked) {
        dislikes = dislikes.filter((e) => e !== email);
        setDisLiked(false);
      } else {
        dislikes.push(email);
        setDisLiked(true);
      }
      const lproduct = { ...props.product, dislikes };
      fetchHandler("products", "PUT", "", lproduct, lproduct.id).then(
        (dataname) => {
          dispatch(
            productActions.addNewProduct({
              id: dataname.id,
              product: dataname,
            })
          );
        }
      );
    } else alert("Login to disLike the product");
  };
  return (
    <div>
      <div className={classes.like}>
        <button onClick={likeHandler}>
          {`(${likes.length})likes `}{" "}
          <AiFillLike style={liked ? { color: "aqua" } : { color: "black" }} />
        </button>
        <button onClick={dislikeHandler}>
          {`(${dislikes.length})dislike `}
          <AiFillDislike
            style={disliked ? { color: "aqua" } : { color: "black" }}
          />
        </button>
      </div>
      <div className={classes.cart}>
        <input
          type="number"
          style={inputstyle}
          value={enteredValue}
          onChange={(e) => setEnteredValue(e.target.value)}
        />
        <button style={buttonstyle} onClick={addtoCartHandler}>
          {buttont}
        </button>
      </div>
    </div>
  );
}

export default CostmerItem;
