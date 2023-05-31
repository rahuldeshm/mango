import React from "react";
import classes from "./Personal.module.css";
import { GrLinkNext } from "react-icons/gr";
import { HiIdentification, HiLocationMarker } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { TbBrandMonday } from "react-icons/tb";

function Personal() {
  return (
    <form className={classes.form}>
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
        <HiLocationMarker className={classes.icon} />
        <span>Address :</span>
      </div>
      <div className={classes.inputbox}>
        <input type="text" required />
        <TbBrandMonday className={classes.icon} />
        <span>logo image :</span>
      </div>
      <div className={classes.inputbox}>
        <button>
          Next
          <GrLinkNext />
        </button>
      </div>
    </form>
  );
}

export default Personal;
