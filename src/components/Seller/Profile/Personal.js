import React from "react";
import classes from "./Personal.module.css";
import { GrLinkNext } from "react-icons/gr";
import { HiIdentification, HiLocationMarker } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { TbBrandMonday } from "react-icons/tb";
import { useState } from "react";
import { useEffect } from "react";
import useLocalstorage from "../../Hooks/useLocalStorage";

function Personal(props) {
  const [object, setObject] = useLocalstorage("Profile", "personal");
  const [panNo, setPanno] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [logo, setLogo] = useState("");

  const localFetch = () => {
    if (!!object) {
      setPanno(object.panNo);
      setFullName(object.fullName);
      setAddress(object.address);
      setLogo(object.logo);
    }
  };

  useEffect(localFetch, [object]);
  const saveHandler = (e) => {
    e.preventDefault();
    setObject("personal", { panNo, fullName, address, logo });
    props.saveHandler();
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
