import React, { useState, useEffect } from "react";
import classes from "./Personal.module.css";
import { GrLinkNext } from "react-icons/gr";
import { HiIdentification, HiLocationMarker } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { TbBrandMonday } from "react-icons/tb";
import useLocalstorage from "../../Hooks/useLocalStorage";

function Account(props) {
  const [object, setObject] = useLocalstorage("Profile", "account");
  const [accountNo, setAccountNo] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [branch, setBranch] = useState("");
  const [caccount, setCaccount] = useState("");

  const localFetch = () => {
    if (!!object) {
      setAccountNo(object.accountNo);
      setIfsc(object.ifsc);
      setBranch(object.branch);
      setCaccount(object.caccount);
    }
  };

  useEffect(localFetch, [object]);

  const saveHandler = (e) => {
    e.preventDefault();
    if (accountNo !== caccount) {
      alert("account No and confirm account number doesn't match");
      return;
    }
    setObject("account", { accountNo, ifsc, branch, caccount });
    props.saveHandler();
  };
  return (
    <form onSubmit={saveHandler} className={classes.form}>
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
        <button>
          Next
          <GrLinkNext />
        </button>
      </div>
    </form>
  );
}

export default Account;
