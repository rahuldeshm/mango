import React from "react";
import SellerHeader from "./SellerHeader";
import { Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom";
import About from "./About/About";
import Profile from "./Profile/Profile";
import YourProducts from "./YourProducts/YourProducts";
import NewProducts from "./NewProducts/NewProducts";
import Footer from "../../Footer/Footer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/productSlice";
import { uiActions } from "../../store/uiSlice";
const url = "https://mango-7694c-default-rtdb.firebaseio.com";
function Seller() {
  const email = useSelector((state) => state.auth.email);
  const dispatch = useDispatch();
  console.log("component rendered seller");
  useEffect(() => {
    async function fetchHandler() {
      dispatch(uiActions.setLoader());
      const res = await fetch(`${url}/products.json`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (res.ok) {
        const keys = Object.keys(data);
        let filtered = [];
        for (let i of keys) {
          if (data[i].email === email) {
            filtered.push({ ...data[i], id: i });
          }
        }
        dispatch(productActions.addProduct(filtered));
      } else {
        alert(data.error.message);
      }
      dispatch(uiActions.setLoader());
    }
    fetchHandler();
  }, []);
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
      <Footer />
    </>
  );
}
export default Seller;
