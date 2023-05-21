import Auth from "./components/Auth/Auth";
import "./App.css";
import Welcome from "./components/Welcome/Welcome";

import Loader from "./ui/Loader/Loader";
import Header from "./components/Header/header";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom";

function App() {
  // return ;
  return (
    <>
      <Header />
      {/* <Loader /> */}
      <Route path="/" exact>
        <Redirect to="/welcome" />
      </Route>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
    </>
  );
}

export default App;
