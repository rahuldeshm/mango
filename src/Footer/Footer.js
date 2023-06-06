import React from "react";
import styles from "./Footer.module.css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Contact</h3>
          <p>Email: rahuldeshmukh@gmail.com</p>
          <p>Phone: +91 70302 36576</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Follow Us</h3>
          <ul className={styles.socialMedia}>
            <li>
              <a href="https://www.facebook.com/">
                <AiFillFacebook />
                <p>facebook</p>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com/">
                <AiFillTwitterSquare />
                <p>twitter</p>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <AiFillInstagram />
                <p className={styles.para}>instagram</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2023 Mango season Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
