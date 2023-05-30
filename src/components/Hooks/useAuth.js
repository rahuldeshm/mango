import { uiActions } from "./../../store/uiSlice";
import { authActions } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function useAuth() {
  const history = useHistory();
  const dispatch = useDispatch();

  const fetchHandler = async (data) => {
    dispatch(uiActions.setLoader());
    const apikey =
      data.loginas === "Login"
        ? "AIzaSyAVVFxex2DkoJzmrbLNI1k-qI-CED2MHPY"
        : "AIzaSyDZ_z-OjwJ8LrN4j6gWNpQGMSA9VIv-YWA";
    const url = data.signup
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
      : "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";

    let res = await fetch(`${url}${apikey}`, {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let authdata = await res.json();
    if (res.ok) {
      dispatch(authActions.login(authdata));
      if (data.loginas === "Login") {
        history.push("/welcome");
      } else {
        alert(
          `${authdata.email} is your Seller account complete profile to enlist your product's`
        );
        history.push("/seller");
      }
    } else {
      if (authdata.error.message === "EMAIL_NOT_FOUND") {
        alert(
          `May be Entered Mail is not ${
            data.loginas === "Login" ? "Regular" : "Seller"
          } account`
        );
      } else {
        alert(authdata.error.message);
      }
    }

    dispatch(uiActions.setLoader());
  };

  return [fetchHandler];
}

export default useAuth;
