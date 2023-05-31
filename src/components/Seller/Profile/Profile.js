import React from "react";
import classes from "./Profile.module.css";
import FormSpace from "./FormSpace";

function Profile() {
  const wid = "50%";
  return (
    <div className={classes.main}>
      <div className={classes.bar}>
        <div className={classes.fill} style={{ width: wid }}></div>
      </div>
      <FormSpace />
    </div>
  );
}

export default Profile;
