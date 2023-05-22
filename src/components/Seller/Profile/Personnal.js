import React from "react";
import { HiIdentification } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import { TbBrandMonday } from "react-icons/tb";
import classes from "./Personnal.module.css";

function Personnal() {
  return (
    <div className={classes.box}>
      <form className={classes.form}>
        <h2>Personnal Details *</h2>
        <div className={classes.inputbox}>
          <input type="text" required />
          <HiIdentification className={classes.icon} />
          <span>Your Pan No :</span>
        </div>
        <div className={classes.inputbox}>
          <input type="text" required />
          <IoPersonSharp className={classes.icon} />
          <span>Full Name :</span>
        </div>
        <div className={classes.inputbox}>
          <input type="text" required />
          <FaLocationArrow className={classes.icon} />
          <span>Address :</span>
        </div>
        <div className={classes.inputbox}>
          <input type="text" required />
          <TbBrandMonday className={classes.icon} />
          <span>logo image :</span>
        </div>
        <div className={classes.inputbox}>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Personnal;
