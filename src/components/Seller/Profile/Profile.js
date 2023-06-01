import React from "react";
import classes from "./Profile.module.css";
import FormSpace from "./FormSpace";
import { useState } from "react";

function Profile() {
  const [wid, setwid] = useState("100%");
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
