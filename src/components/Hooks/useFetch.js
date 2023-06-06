import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";

const url = "https://mango-7694c-default-rtdb.firebaseio.com";

function useFetch(initialState) {
  const dispatch = useDispatch();
  const [datastate, setData] = useState(initialState);

  const fetchHandler = async (key, method, email, payload, putkey = "") => {
    console.log(key, method, email, payload, putkey);
    let emailf = !!email ? `/${email}` : "";
    let body = !!payload ? JSON.stringify(payload) : null;

    dispatch(uiActions.setLoader());
    const res = await fetch(`${url}${emailf}/${key}/${putkey}.json`, {
      method,
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok) {
      if (method === "GET") {
        setData(data);
      } else {
        dispatch(uiActions.setLoader());
        return data;
      }
    } else {
      alert(data.error.message);
    }
    dispatch(uiActions.setLoader());
  };

  return [datastate, fetchHandler];
}

export default useFetch;
