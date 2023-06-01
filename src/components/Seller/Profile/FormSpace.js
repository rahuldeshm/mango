import React, { useState } from "react";
import { GrLinkPrevious } from "react-icons/gr";
import classes from "./FormSpace.module.css";
import Personal from "./Personal";
import Account from "./Account";
import Other from "./Other";

function FormSpace(props) {
  const list = ["personnal", "account", "other", "Profile Completed"];
  const previousHandler = () => {
    if (props.showForm === 0) {
      return;
    } else {
      props.setShowForm(props.showForm - 1);
    }
  };
  const saveHandler = () => {
    props.setShowForm(props.showForm + 1);
  };
  const submitHandler = () => {
    props.submitHandler();
  };

  return (
    <div className={classes.box}>
      <div className={classes.form}>
        <div className={classes.header}>
          <button onClick={previousHandler}>
            <GrLinkPrevious />
          </button>
          <h2>{list[props.showForm]}</h2>
        </div>
        {list[props.showForm] === "personnal" && (
          <Personal saveHandler={saveHandler} />
        )}
        {list[props.showForm] === "account" && (
          <Account saveHandler={saveHandler} />
        )}
        {list[props.showForm] === "other" && (
          <Other saveHandler={submitHandler} />
        )}
        {list[props.showForm] === "Profile Completed" && (
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
