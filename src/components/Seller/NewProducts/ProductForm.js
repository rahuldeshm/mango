import React, { useState } from "react";
import styles from "./ProductForm.module.css";
import ImageUploader from "../../ImageUploader/ImageUploader";

const ProductForm = (props) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [canReturn, setCanReturn] = useState(false);
  const [returnConditions, setReturnConditions] = useState("");
  const [pricePerDozen, setPricePerDozen] = useState(0);
  const [availableInDozen, setAvailableInDozen] = useState(0);
  const [urlList, setUrlList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      productName === "" ||
      productDescription === "" ||
      pricePerDozen === 0 ||
      availableInDozen === 0 ||
      urlList.length < 3
    ) {
      alert(
        "add at least 3 images of product and give all the valid input to show your product to customer."
      );
      return;
    }
    props.sendData(
      productName,
      productDescription,
      pricePerDozen,
      urlList,
      availableInDozen,
      canReturn,
      returnConditions
    );
  };

  const handleLabelClick = (e) => {
    const container = e.currentTarget.parentNode;
    container.classList.toggle(styles.showInput);
  };
  const urlUpdataHandler = (url) => {
    setUrlList([...urlList, url]);
  };
  let imageuploaders = [];
  for (let i = 0; i < urlList.length + 1; i++) {
    imageuploaders.push(<ImageUploader key={i} setUrl={urlUpdataHandler} />);
  }

  return (
    <form className={styles.form}>
      <label className={styles.label} onClick={handleLabelClick}>
        Name of Product:
        <input
          className={styles.input}
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </label>
      <br />
      <label className={styles.label} onClick={handleLabelClick}>
        Description of Product:
        <textarea
          className={styles.textarea}
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
      </label>
      <br />

      <label className={styles.label}>
        Price per Dozen:
        <input
          className={styles.input}
          type="number"
          value={pricePerDozen}
          onChange={(e) => setPricePerDozen(e.target.value)}
        />
      </label>
      <br />
      <label className={styles.label}>
        Image of product:
        {imageuploaders}
      </label>
      <br />
      <label className={styles.label}>
        Currently Available in Dozen:
        <input
          className={styles.input}
          type="number"
          value={availableInDozen}
          onChange={(e) => setAvailableInDozen(e.target.value)}
        />
      </label>
      <br />
      <label className={styles.label}>
        Can Return:
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={canReturn}
          onChange={(e) => setCanReturn(e.target.checked)}
        />
      </label>
      <br />
      {canReturn && (
        <label className={styles.label}>
          Conditions to Return:
          <input
            className={styles.input}
            type="text"
            value={returnConditions}
            onChange={(e) => setReturnConditions(e.target.value)}
          />
        </label>
      )}
      <br />
      <button onClick={handleSubmit} className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
};

export default ProductForm;
