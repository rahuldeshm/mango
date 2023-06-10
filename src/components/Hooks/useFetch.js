import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";

const url = "https://mango-7694c-default-rtdb.firebaseio.com";

function useFetch(initialState) {
  const dispatch = useDispatch();

  const fetchHandler = async (key, method, email, payload, putkey) => {
    console.log(key, method, email, payload, putkey);
    let emailf = !!email ? `/${email}` : "";
    let body = !!payload ? JSON.stringify(payload) : null;
    let putkeyf = !!putkey ? putkey : "";

    dispatch(uiActions.setLoader());
    const res = await fetch(`${url}${emailf}/${key}/${putkeyf}.json`, {
      method,
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (res.ok) {
      dispatch(uiActions.setLoader());
      return data;
    } else {
      alert(data.error.message);
    }
    dispatch(uiActions.setLoader());
  };

  return [fetchHandler];
}

export default useFetch;
