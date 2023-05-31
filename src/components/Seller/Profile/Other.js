import React, { useState, useEffect } from "react";
import classes from "./Personal.module.css";
import { HiIdentification, HiLocationMarker } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { TbBrandMonday } from "react-icons/tb";

function Other(props) {
  const [sAddress, setSAddress] = useState("");
  const [bAddress, setBAddress] = useState("");
  const [things, setThings] = useState("");
  const [panImage, setPanImage] = useState("");

  const localFetch = () => {
    const localdata = JSON.parse(localStorage.getItem("other"));
    if (!!localdata) {
      setSAddress(localdata.sAddress);
      setBAddress(localdata.bAddress);
      setThings(localdata.things);
      setPanImage(localdata.panImage);
    }
  };

  useEffect(localFetch, []);

  const saveHandler = (e) => {
    e.preventDefault();
    localStorage.setItem(
      "other",
      JSON.stringify({ sAddress, bAddress, things, panImage })
    );
    props.saveHandler("other", sAddress, bAddress, things, panImage);
  };
  return (
    <form className={classes.form}>
      <div className={classes.inputbox}>
        <input
          value={sAddress}
          onChange={(e) => setSAddress(e.target.value)}
          type="text"
          required
        />
        <HiIdentification className={classes.icon} />
        <span>Shipping Address :</span>
      </div>
      <div className={classes.inputbox}>
        <input
          value={bAddress}
          onChange={(e) => setBAddress(e.target.value)}
          type="text"
          required
        />
        <IoPersonSharp className={classes.icon} />
        <span>Billing Address</span>
      </div>
      <div className={classes.inputbox}>
        <input
          value={things}
          onChange={(e) => setThings(e.target.value)}
          type="text"
          required
        />
        <HiLocationMarker className={classes.icon} />
        <span>General things of products :</span>
      </div>
      <div className={classes.inputbox}>
        <input
          value={panImage}
          onChange={(e) => setPanImage(e.target.value)}
          type="text"
          required
        />
        <TbBrandMonday className={classes.icon} />
        <span>Pan image Link:</span>
      </div>
      <div className={classes.inputbox}>
        <button onClick={saveHandler} style={{ backgroundColor: "green" }}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Other;
