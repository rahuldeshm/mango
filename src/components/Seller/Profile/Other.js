import React, { useState, useEffect } from "react";
import classes from "./Personal.module.css";
import { HiIdentification, HiLocationMarker } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { TbBrandMonday } from "react-icons/tb";
import useLocalstorage from "../../Hooks/useLocalStorage";

function Other(props) {
  const [object, setObject] = useLocalstorage("Profile", "other");
  const [sAddress, setSAddress] = useState("");
  const [bAddress, setBAddress] = useState("");
  const [things, setThings] = useState("");
  const [panImage, setPanImage] = useState("");

  const localFetch = () => {
    if (!!object) {
      setSAddress(object.sAddress);
      setBAddress(object.bAddress);
      setThings(object.things);
      setPanImage(object.panImage);
    }
  };

  useEffect(localFetch, [object]);

  const saveHandler = (e) => {
    e.preventDefault();
    setObject("other", { sAddress, bAddress, things, panImage });
    props.saveHandler();
  };
  return (
    <form onSubmit={saveHandler} className={classes.form}>
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
        <button style={{ backgroundColor: "green" }}>Submit</button>
      </div>
    </form>
  );
}

export default Other;
