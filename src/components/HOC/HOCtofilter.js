import React, { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./HOCtofilter.module.css";
const limits = {
  1: { upper: 100, lower: 0 },
  2: { upper: 500, lower: 100 },
  3: { upper: 1000, lower: 500 },
  4: { upper: 1000000, lower: 1000 },
  5: { upper: 1000000, lower: 0 },
};
const HOC = (WrappedComponent, entity) => {
  const HOC = () => {
    const [limit, setLimit] = useState({ upper: 500000, lower: 0 });
    const [term, setTerm] = useState("");
    const data = useSelector((state) => state.product.products);
    const keys = Object.keys(data);
    let list = [];
    for (let i of keys) {
      list.push({ ...data[i], id: i });
    }
    const filtereddataof = list.filter((e) => {
      return e.product.indexOf(term) >= 0 || e.email.indexOf(term) >= 0;
    });
    const filtereddata = filtereddataof.filter((e) => {
      return e.price < limit.upper && e.price >= limit.lower;
    });
    return (
      <div>
        <div className={classes.filter}>
          <input
            onChange={(e) => setTerm(e.target.value)}
            placeholder="By name or seller"
          />
          <select
            defaultValue="5"
            onChange={(e) => setLimit(limits[e.target.value])}
          >
            <option value="1">1 to 100 rs</option>
            <option value="2">100 to 500 rs</option>
            <option value="3">500 to 1000 rs</option>
            <option value="4">more than 1000</option>
            <option value="5">All</option>
          </select>
        </div>
        <WrappedComponent data={filtereddata} />
      </div>
    );
  };
  return HOC;
};

export default HOC;
