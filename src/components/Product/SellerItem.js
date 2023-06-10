import React, { useState } from "react";
import classes from "./CostmerItem.module.css";
import useFetch from "../Hooks/useFetch";
import { productActions } from "./../../store/productSlice";
import { useDispatch } from "react-redux";
import { currentProductActions } from "../../store/currentProductSlice";

function SellerItem(props) {
  //product as props
  const dispatch = useDispatch();
  const [fetchHandler] = useFetch();
  const [toggle, setToggle] = useState(true);
  const [enteredValue, setEnteredValue] = useState("");

  const inputstyle = toggle
    ? { width: "2%", background: "rgb(143, 170, 143)", border: "none" }
    : { width: "70%" };
  const buttonstyle = toggle ? { width: "98%" } : { width: "30%" };
  const buttont = toggle ? "Change Availability" : "Submit";
  const availableHandler = () => {
    if (!toggle) {
      const product = { ...props.product };
      product.available = parseInt(product.available) + parseInt(enteredValue);
      fetchHandler("products", "PUT", "", product, product.id).then(
        (dataname) => {
          dispatch(
            productActions.addNewProduct({
              id: dataname.id,
              product: dataname,
            })
          );
        }
      );
      setToggle(!toggle);
      setEnteredValue("");
    } else {
      setToggle(!toggle);
    }
  };
  const editHandler = () => {
    dispatch(currentProductActions.addCurrent(props.product));
  };
  const deleteHandler = () => {
    fetchHandler("products", "DELETE", "", null, props.product.id).then(
      (data) => {
        dispatch(productActions.deleteProduct(props.product.id));
      }
    );
  };
  return (
    <div>
      <div className={classes.cart}>
        <input
          type="number"
          style={inputstyle}
          value={enteredValue}
          onChange={(e) => setEnteredValue(e.target.value)}
        />
        <button style={buttonstyle} onClick={availableHandler}>
          {buttont}
        </button>
      </div>
      <div className={classes.like}>
        <button onClick={editHandler}>Edit</button>
        <button onClick={deleteHandler}>delete</button>
      </div>
    </div>
  );
}

export default SellerItem;
