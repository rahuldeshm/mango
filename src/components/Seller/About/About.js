import React, { useState } from "react";
import classes from "./About.module.css";
import { IoMdArrowDropdownCircle } from "react-icons/io";

function About() {
  const [view, setView] = useState([true, false, false, false, false]);
  let edit = [...view];
  return (
    <div className={classes.main}>
      <div>
        <div
          onClick={() => {
            edit[0] = !edit[0];
            setView(edit);
          }}
          className={classes.heading}
        >
          <IoMdArrowDropdownCircle
            className={`${classes.icon} ${view[0] && classes.activated}`}
          />
          <p>General</p>
        </div>
        {view[0] && (
          <div className={classes.para}>
            this is general information of Mango season we are identified for
            best quality Mangos for your region and if we have athis is general
            information of Mango season we are identified for best quality
            Mangos for your region and if we have athis is general information
            of Mango season we are identified for best quality Mangos for your
            region and if we have athis is general information of Mango season
            we are identified for best quality Mangos for your region and if we
            have athis is general information of Mango season we are identified
            for best quality Mangos for your region and if we have athis is
            general information of Mango season we are identified for best
            quality Mangos for your region and if we have a
          </div>
        )}
      </div>
      <div>
        <div
          onClick={() => {
            edit[1] = !edit[1];
            setView(edit);
          }}
          className={classes.heading}
        >
          <IoMdArrowDropdownCircle
            className={`${classes.icon} ${view[1] && classes.activated}`}
          />
          <p>Payments</p>
        </div>
        {view[1] && (
          <div className={classes.para}>
            this is general information of Mango season we are identified for
            best quality Mangos for your region and if we have athis is general
            information of Mango season we are identified for best quality
            Mangos for your region and if we have athis is general information
            of Mango season we are identified for best quality Mangos for your
            region and if we have a
          </div>
        )}
      </div>
      <div>
        <div
          onClick={() => {
            edit[2] = !edit[2];
            setView(edit);
          }}
          className={classes.heading}
        >
          <IoMdArrowDropdownCircle
            className={`${classes.icon} ${view[2] && classes.activated}`}
          />
          <p>Shipping</p>
        </div>
        {view[2] && (
          <div className={classes.para}>
            this is general information of Mango season we are identified for
            best quality Mangos for your region and if we have a
          </div>
        )}
      </div>
      <div>
        <div
          onClick={() => {
            edit[3] = !edit[3];
            setView(edit);
          }}
          className={classes.heading}
        >
          <IoMdArrowDropdownCircle
            className={`${classes.icon} ${view[3] && classes.activated}`}
          />
          <p>Adding a Item</p>
        </div>
        {view[3] && (
          <div className={classes.para}>
            this is general information of Mango season we are identified for
            best quality Mangos for your region and if we have a
          </div>
        )}
      </div>
      <div>
        <div
          onClick={() => {
            edit[4] = !edit[4];
            setView(edit);
          }}
          className={classes.heading}
        >
          <IoMdArrowDropdownCircle
            className={`${classes.icon} ${view[4] && classes.activated}`}
          />
          <p>About Quality</p>
        </div>
        {view[4] && (
          <div className={classes.para}>
            this is general information of Mango season we are identified for
            best quality Mangos for your region and if we have a
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
