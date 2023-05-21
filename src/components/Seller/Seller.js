import React from "react";
import SellerHeader from "./SellerHeader";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom";
import About from "./About/About";
import Profile from "./Profile/Profile";
import YourProducts from "./YourProducts/YourProducts";
import NewProducts from "./NewProducts/NewProducts";

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
          <YourProducts />
        </Route>
        <Route path="/seller/newproducts">
          <NewProducts />
        </Route>
      </Switch>
    </>
  );
}
export default Seller;
