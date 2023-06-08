import Auth from "./components/Auth/Auth";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";

import Loader from "./ui/Loader/Loader";
import Header from "./components/Header/header";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom";
import Seller from "./components/Seller/Seller";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./store/uiSlice";
import { productActions } from "./store/productSlice";
import Individual from "./components/Individual/Individual";

const url = "https://mango-7694c-default-rtdb.firebaseio.com";
function App() {
  const loader = useSelector((state) => state.ui.loader);
  const type = useSelector((state) => state.auth.type);
  const dispatch = useDispatch();
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
          filtered.push({ ...data[i], id: i });
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
      <Header />
      {loader && <Loader />}

      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/product/:id">
        <Individual />
      </Route>
      {type === "Seller" && (
        <Route path="/seller">
          <Seller />
        </Route>
      )}
      <Route path="*">
        <Redirect to={type === "Seller" ? "/seller" : "/welcome"} />
      </Route>
    </>
  );
}

export default App;
