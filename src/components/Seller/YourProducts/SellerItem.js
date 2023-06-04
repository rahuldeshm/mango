import React, { useState } from "react";
import classes from "./CostmerItem.module.css";

function SellerItem(props) {
  const [toggle, setToggle] = useState(true);
  const [enteredValue, setEnteredValue] = useState("");

  const inputstyle = toggle
    ? { width: "2%", background: "rgb(143, 170, 143)", border: "none" }
    : { width: "70%" };
  const buttonstyle = toggle ? { width: "98%" } : { width: "30%" };
  const buttont = toggle ? "Change Availability" : "Submit";
  const addtoCartHandler = () => {
    if (!toggle) {
      console.log("Added to cart", enteredValue);
      setToggle(!toggle);
      setEnteredValue("");
    } else {
      setToggle(!toggle);
    }
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
        <button style={buttonstyle} onClick={addtoCartHandler}>
          {buttont}
        </button>
      </div>
      <div className={classes.like}>
        <button>Edit</button>
        <button>delete</button>
      </div>
    </div>
  );
}

export default SellerItem;
