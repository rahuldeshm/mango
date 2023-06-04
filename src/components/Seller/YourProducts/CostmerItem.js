import React, { useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import classes from "./CostmerItem.module.css";

function CostmerItem(props) {
  const [toggle, setToggle] = useState(true);
  const [enteredValue, setEnteredValue] = useState("");
  const likes = 0;
  const dislikes = 0;
  const inputstyle = toggle
    ? { width: "2%", background: "rgb(143, 170, 143)", border: "none" }
    : { width: "70%" };
  const buttonstyle = toggle ? { width: "98%" } : { width: "30%" };
  const buttont = toggle ? "Add to Cart" : "Submit";
  const addtoCartHandler = () => {
    if (!toggle) {
      console.log("Added to cart");
      setToggle(!toggle);
      setEnteredValue("");
    } else {
      setToggle(!toggle);
    }
  };
  return (
    <div>
      <div className={classes.like}>
        <button>
          {`(${likes})likes `} <AiFillLike />
        </button>
        <button>
          {`(${dislikes})dislike `}
          <AiFillDislike />
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
