import React, { useState, useEffect } from "react";
import classes from "./Personal.module.css";
import { GrLinkNext } from "react-icons/gr";
import { HiIdentification, HiLocationMarker } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { TbBrandMonday } from "react-icons/tb";

function Account(props) {
  const [accountNo, setAccountNo] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [branch, setBranch] = useState("");
  const [caccount, setCaccount] = useState("");

  const localFetch = () => {
    const localdata = JSON.parse(localStorage.getItem("account"));
    if (!!localdata) {
      setAccountNo(localdata.accountNo);
      setIfsc(localdata.ifsc);
      setBranch(localdata.branch);
      setCaccount(localdata.caccount);
    }
  };

  useEffect(localFetch, []);

  const saveHandler = (e) => {
    e.preventDefault();
    if (accountNo !== caccount) {
      alert("account No and confirm account number doesn't match");
      return;
    }
    localStorage.setItem(
      "account",
      JSON.stringify({ accountNo, ifsc, branch, caccount })
    );
    props.saveHandler("account", accountNo, ifsc, branch, caccount);
  };
  return (
    <form className={classes.form}>
      <div className={classes.inputbox}>
        <input
          value={accountNo}
          onChange={(e) => setAccountNo(e.target.value)}
          type="text"
          required
        />
        <HiIdentification className={classes.icon} />
        <span>Bank Account No :</span>
      </div>
      <div className={classes.inputbox}>
        <input
          value={ifsc}
          onChange={(e) => setIfsc(e.target.value)}
          type="text"
          required
        />
        <IoPersonSharp className={classes.icon} />
        <span>IFSC code :</span>
      </div>
      <div className={classes.inputbox}>
        <input
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
          type="text"
          required
        />
        <HiLocationMarker className={classes.icon} />
        <span>Branch :</span>
      </div>
      <div className={classes.inputbox}>
        <input
          value={caccount}
          onChange={(e) => setCaccount(e.target.value)}
          type="text"
          required
        />
        <TbBrandMonday className={classes.icon} />
        <span>Confirm Account No</span>
      </div>
      <div className={classes.inputbox}>
        <button onClick={saveHandler}>
          Next
          <GrLinkNext />
        </button>
      </div>
    </form>
  );
}

export default Account;
