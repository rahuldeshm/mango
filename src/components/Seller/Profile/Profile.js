import React from "react";
import classes from "./Profile.module.css";
import Personnal from "./Personnal";

function Profile() {
  return (
    <div className={classes.main}>
      <Personnal />
    </div>
  );
}

export default Profile;
