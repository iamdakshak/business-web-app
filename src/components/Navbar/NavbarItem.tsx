import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarItem.module.scss";

const NavbarItem = (props) => {
  const { link, label } = props?.linkData;
  return (
    <div className={styles.navLink}>
      <Link to={link}>{label}</Link>
    </div>
  );
};

export default NavbarItem;
