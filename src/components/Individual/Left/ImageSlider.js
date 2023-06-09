import { useState } from "react";
import classes from "./ImageSlider.module.css";

function ImageSlider(props) {
  const [active, setActive] = useState(0);
  return (
    <div className={classes.wholeslider}>
      <div className={classes.mainimg}>
        <img src={props.list[active]} alt="product" />
      </div>
      <div className={classes.allimg}>
        {props.list.map((e, index) => {
          return (
            <img
              key={index}
              style={
                active === index
                  ? {
                      border: "4px solid aqua",
                      boxSizing: "border-box",
                    }
                  : { border: "3px solid rgb(131, 86, 4)" }
              }
              src={e}
              onClick={() => setActive(index)}
              alt="product"
            />
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlider;
