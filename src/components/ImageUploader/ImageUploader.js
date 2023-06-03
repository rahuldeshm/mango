import React, { useState } from "react";
import classes from "./ImageUploader.module.css";
import { storage } from "./../../firebase";
import { AiFillCheckCircle } from "react-icons/ai";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useSelector } from "react-redux";

const ImageUploader = (props) => {
  const [hide, sethide] = useState(true);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const email = useSelector((state) => state.auth.authorisation.email)
    .replace("@", "")
    .replace(".", "");
  const handleImageUpload = async (e) => {
    e.preventDefault();
    if (selectedImage === null) {
      alert("Please Select a image");
      return;
    }

    setLoading(!loading);
    const imgRef = ref(storage, `productPics/${email}/${selectedImage.name}`);
    const res = await uploadBytes(imgRef, selectedImage);
    const url = await getDownloadURL(res.ref);
    props.setUrl(url);
    alert("Image Uploaded");
    sethide(false);
    setLoading(!loading);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  return (
    <div>
      <input
        type="file"
        onChange={handleImageChange}
        disabled={hide ? false : true}
      />
      {hide && (
        <button onClick={handleImageUpload} className={classes.button}>
          {loading ? <div className={classes.loader}></div> : "Upload Image"}
        </button>
      )}
      {!hide && <AiFillCheckCircle style={{ color: "green" }} />}
    </div>
  );
};

export default ImageUploader;
