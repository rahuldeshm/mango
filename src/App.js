import Auth from "./components/Auth/Auth";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";

import Loader from "./ui/Loader/Loader";
import Header from "./components/Header/header";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom";
import Seller from "./components/Seller/Seller";
import { useSelector } from "react-redux";

function App() {
  const loader = useSelector((state) => state.ui.loader);
  const authorised = useSelector((state) => state.auth.authorised);
  const type = useSelector((state) => state.auth.type);
  // return ;
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
      {authorised && (
        <Route path="/seller">
          <Seller />
        </Route>
      )}
      <Route path="*" exact>
        <Redirect
          to={
            authorised ? (type === "Seller" ? "/seller" : "/welcome") : "/auth"
          }
        />
      </Route>
    </>
  );
}

export default App;
