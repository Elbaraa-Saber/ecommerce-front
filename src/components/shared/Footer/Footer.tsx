import React from "react";
import styles from "./styles.module.css";
const { footerContainer } = styles;

const Footer = () => {
  return (
    <div className={footerContainer}>
      &copy; 2022 Our Ecomm. All rights reserved.
    </div>
  );
};

export default Footer;
