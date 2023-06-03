import React from "react";
import classes from "./NewProducts.module.css";
import ProductForm from "./ProductForm";
import useFetch from "../../Hooks/useFetch";

function NewProducts() {
  const [dataSendedToserver, sendDatatoserver] = useFetch();
  const dataHandler = async (
    product,
    discription,
    price,
    imglist,
    available,
    canReturn,
    condition
  ) => {
    const data = await sendDatatoserver("products", "POST", {
      product,
      discription,
      price,
      imglist,
      available,
      canReturn,
      condition,
    });
  };

  return (
    <div className="main">
      <div className={classes.inner}>
        <h3>Add Your New Product</h3>
        <p>This information will directly showed to Customers</p>
        <ProductForm sendData={dataHandler} />
      </div>
    </div>
  );
}

export default NewProducts;
