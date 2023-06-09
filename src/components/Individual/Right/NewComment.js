import React from "react";
import classes from "./NewComment.module.css";

function NewComment() {
  return (
    <div className={classes.newcomment}>
      <h4>Add New Comment</h4>
      <textarea className={classes.textarea} />
    </div>
  );
}

export default NewComment;
