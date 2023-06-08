import React from "react";
import SellerHeader from "./SellerHeader";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom";
import About from "./About/About";
import Profile from "./Profile/Profile";
import NewProducts from "./NewProducts/NewProducts";
import Footer from "../../Footer/Footer";
import EnhancedYourProduct from "./YourProducts/YourProducts";

function Seller() {
  return (
    <>
      <SellerHeader />
      <Switch>
        <Route path="/seller/" exact>
          <Redirect to="/seller/about" />
        </Route>
        <Route path="/seller/about">
          <About />
        </Route>
        <Route path="/seller/profile">
          <Profile />
        </Route>
        <Route path="/seller/yourproducts">
          <EnhancedYourProduct />
        </Route>
        <Route path="/seller/newproducts">
          <NewProducts />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
export default Seller;
