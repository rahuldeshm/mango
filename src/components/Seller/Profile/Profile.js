import React from "react";
import classes from "./Profile.module.css";
import FormSpace from "./FormSpace";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch from "../../Hooks/useFetch";

const local = (email) => {
  return JSON.parse(localStorage.getItem(`Profile${email}`));
};
function Profile() {
  const [fetchdata, serverFetchdata] = useFetch(null);
  const email = useSelector((state) => state.auth.email);
  const [showForm, setShowForm] = useState(0);
  const wid = `${(showForm * 100) / 3}%`;
  const clr = `rgb(${255 / showForm + 1},${100 * showForm} , 0) `;
  const locald = local(email);
  function submitHandler() {
    const final = local(email);
    const putkey = JSON.parse(localStorage.getItem(`profilekey${email}`));
    const method = !!putkey ? "PATCH" : "POST";
    serverFetchdata("Profile", method, email, final, putkey).then((res) => {
      if (!!res.name) {
        localStorage.setItem(`profilekey${email}`, res.name);
      }
      setShowForm(showForm + 1);
    });
  }
  const fetchHandler = () => {
    if (!!locald) {
      setShowForm(Object.keys(locald).length);
    } else if (!!fetchdata) {
      let key = Object.keys(fetchdata)[0];
      localStorage.setItem(
        `Profile${email}`,
        JSON.stringify({ ...fetchdata[key] })
      );
      localStorage.setItem(`profilekey${email}`, JSON.stringify(key));
      setShowForm(3);
    } else {
      // console.log("tried to fetch data");
      serverFetchdata("Profile", "GET", email);
    }
  };
  useEffect(fetchHandler, [fetchdata]);
  console.log("component rerendered");
  return (
    <div className="main">
      <div className={classes.bar}>
        <div
          className={classes.fill}
          style={{ width: wid, backgroundColor: clr }}
        ></div>
      </div>
      <FormSpace
        submitHandler={submitHandler}
        setShowForm={setShowForm}
        showForm={showForm}
      />
    </div>
  );
}

export default Profile;
