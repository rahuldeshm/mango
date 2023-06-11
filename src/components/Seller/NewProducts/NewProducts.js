import React from "react";
import classes from "./NewProducts.module.css";
import ProductForm from "./ProductForm";
import useFetch from "../../Hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../../store/productSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { currentProductActions } from "../../../store/currentProductSlice";

function NewProducts() {
  const dispatch = useDispatch();
  const history = useHistory();
  const email = useSelector((state) => state.auth.email);
  const [sendDatatoserver] = useFetch(null);
  const dataHandler = async (
    product,
    discription,
    price,
    imglist,
    available,
    canReturn,
    condition,
    method,
    id
  ) => {
    const data = await sendDatatoserver(
      "products",
      method,
      "",
      {
        email,
        product,
        discription,
        price,
        imglist,
        available,
        canReturn,
        condition,
        likes: [0],
        dislikes: [0],
        buyed: [0],
        comments: [0],
      },
      id
    );
    dispatch(
      productActions.addNewProduct({
        id: method === "POST" ? data.name : id,
        product: {
          email,
          product,
          discription,
          price,
          imglist,
          available,
          canReturn,
          condition,
          likes: [0],
          dislikes: [0],
          buyed: [0],
          comments: [0],
        },
      })
    );

    dispatch(currentProductActions.addCurrent(null));
    history.push("/seller/yourproducts");
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
