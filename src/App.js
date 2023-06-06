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

const url = "https://mango-7694c-default-rtdb.firebaseio.com";
function App() {
  const loader = useSelector((state) => state.ui.loader);
  const type = useSelector((state) => state.auth.type);
  const email = useSelector((state) => state.auth.email);
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
        if (type === "Seller") {
          for (let i of keys) {
            if (data[i].email === email) {
              filtered.push({ ...data[i], id: i });
            }
          }
          dispatch(productActions.addProduct(filtered));
        } else {
          for (let i of keys) {
            filtered.push({ ...data[i], id: i });
          }
          dispatch(productActions.addProduct(filtered));
        }
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
