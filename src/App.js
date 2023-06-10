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
import useFetch from "./components/Hooks/useFetch";

function App() {
  const [fetchHandler] = useFetch();
  const loader = useSelector((state) => state.ui.loader);
  const type = useSelector((state) => state.auth.type);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchHandler("products", "GET").then((data) => {
      dispatch(productActions.addProduct(data));
    });
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
