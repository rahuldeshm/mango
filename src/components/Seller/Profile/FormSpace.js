import React, { useState } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import classes from "./FormSpace.module.css";
import Personal from "./Personal";
import Account from "./Account";
import Other from "./Other";

function FormSpace() {
  const [showForm, setShowForm] = useState(0);
  const list = ["personnal", "account", "other", "Profile Completed"];
  const previousHandler = () => {
    if (showForm === 0) {
      return;
    } else {
      setShowForm(showForm - 1);
    }
  };
  const saveHandler = () => {
    setShowForm(showForm + 1);
  };
  const submitHandler = () => {
    setShowForm(showForm + 1);
  };

  return (
    <div className={classes.box}>
      <div className={classes.form}>
        <div className={classes.header}>
          <button onClick={previousHandler}>
            <GrLinkPrevious />
          </button>
          <h2>{list[showForm]}</h2>
        </div>
        {list[showForm] === "personnal" && (
          <Personal saveHandler={saveHandler} />
        )}
        {list[showForm] === "account" && <Account saveHandler={saveHandler} />}
        {list[showForm] === "other" && <Other saveHandler={submitHandler} />}
        {list[showForm] === "Profile Completed" && (
          <div className={classes.circle}>
            <img
              alt="Profile Completed"
              src="https://static-00.iconduck.com/assets.00/process-completed-icon-499x512-mhraisqh.png"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default FormSpace;
