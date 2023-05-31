import React, { useState } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import classes from "./FormSpace.module.css";
import Personal from "./Personal";
import Account from "./Account";
import Other from "./Other";

function FormSpace() {
  const [showForm, setShowForm] = useState(4);
  const list = ["personnal", "account", "other"];
  const previousHandler = () => {
    if (showForm === 0) {
      return;
    } else {
      setShowForm(showForm - 1);
    }
  };
  return (
    <div className={classes.box}>
      <div className={classes.form}>
        <div className={classes.header}>
          <button onClick={previousHandler}>
            <GrLinkPrevious />
          </button>
          <h2>Personnal Details</h2>
          <button>Save</button>
        </div>
        {list[showForm] === "personnal" && <Personal />}
        {list[showForm] === "account" && <Account />}
        {list[showForm] === "other" && <Other />}
      </div>
    </div>
  );
}

export default FormSpace;
