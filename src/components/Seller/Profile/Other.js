import React from "react";
import classes from "./Personal.module.css";
import { GrLinkNext } from "react-icons/gr";
import { HiIdentification, HiLocationMarker } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { TbBrandMonday } from "react-icons/tb";

function Other() {
  return (
    <form className={classes.form}>
      <div className={classes.inputbox}>
        <input type="text" required />
        <HiIdentification className={classes.icon} />
        <span>Shipping Address :</span>
      </div>
      <div className={classes.inputbox}>
        <input type="text" required />
        <IoPersonSharp className={classes.icon} />
        <span>Billing Address</span>
      </div>
      <div className={classes.inputbox}>
        <input type="text" required />
        <HiLocationMarker className={classes.icon} />
        <span>General things of paoducts :</span>
      </div>
      <div className={classes.inputbox}>
        <input type="text" required />
        <TbBrandMonday className={classes.icon} />
        <span>Pan image Link:</span>
      </div>
      <div className={classes.inputbox}>
        <button style={{ backgroundColor: "green" }}>Submit</button>
      </div>
    </form>
  );
}

export default Other;
