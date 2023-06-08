import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function Individual() {
  const params = useParams();
  const products = useSelector((state) => state.product.products);
  const product = products.filter((e) => e.id === params.id)[0];
  console.log(product);

  return <div>{`Individual ${params.id}`}</div>;
}

export default Individual;
