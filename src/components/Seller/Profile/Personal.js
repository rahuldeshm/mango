import React from "react";
import classes from "./Personal.module.css";
import { GrLinkNext } from "react-icons/gr";
import { HiIdentification, HiLocationMarker } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { TbBrandMonday } from "react-icons/tb";
import { useState } from "react";
import { useEffect } from "react";

function Personal(props) {
  const [panNo, setPanno] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [logo, setLogo] = useState("");

  const localFetch = () => {
    const localdata = JSON.parse(localStorage.getItem("personal"));
    if (!!localdata) {
      setPanno(localdata.panNo);
      setFullName(localdata.fullName);
      setAddress(localdata.address);
      setLogo(localdata.logo);
    }
  };

  useEffect(localFetch, []);
  const saveHandler = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "personal",
      JSON.stringify({ panNo, fullName, address, logo })
    );
    props.saveHandler("personal", panNo, fullName, address, logo);
  };
  return (
    <form onSubmit={saveHandler} className={classes.form}>
      <div className={classes.inputbox}>
        <input
          value={panNo}
          onChange={(e) => setPanno(e.target.value)}
          type="text"
          required
        />
        <HiIdentification className={classes.icon} />
        <span>Your Pan No :</span>
      </div>
      <div className={classes.inputbox}>
        <input
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          type="text"
          required
        />
        <IoPersonSharp className={classes.icon} />
        <span>Full Name :</span>
      </div>
      <div className={classes.inputbox}>
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          required
        />
        <HiLocationMarker className={classes.icon} />
        <span>Address :</span>
      </div>
      <div className={classes.inputbox}>
        <input
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
          type="text"
          required
        />
        <TbBrandMonday className={classes.icon} />
        <span>logo image :</span>
      </div>
      <div className={classes.inputbox}>
        <button>
          Next
          <GrLinkNext />
        </button>
      </div>
    </form>
  );
}

export default Personal;
