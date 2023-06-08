import React from "react";
import Footer from "./../../Footer/Footer";
import classes from "./Welcome.module.css";
import EnhancedProducts from "./Products/Products";

function Welcome() {
  return (
    <>
      <div className={classes.main}>
        {/* <HeaderWelcome/> */}
        <EnhancedProducts />
      </div>
      <Footer />
    </>
  );
}

export default Welcome;
