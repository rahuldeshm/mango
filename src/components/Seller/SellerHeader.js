import React from "react";

import classes from "./SellerHeader.module.css";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function SellerHeader() {
  return (
    <div className={classes.header}>
      <NavLink to="/seller/about" activeClassName={classes.active}>
        <button>about</button>
      </NavLink>
      <NavLink to="/seller/profile" activeClassName={classes.active}>
        <button>Profile</button>
      </NavLink>
      <NavLink to="/seller/yourproducts" activeClassName={classes.active}>
        <button>Your Products</button>
      </NavLink>
      <NavLink to="/seller/newproducts" activeClassName={classes.active}>
        <button>New Product</button>
      </NavLink>
    </div>
  );
}

export default SellerHeader;
