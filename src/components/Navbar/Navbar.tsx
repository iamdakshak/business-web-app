import React from "react";
import Button from "../Button/Button";
// import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import NavbarItem from "./NavbarItem";

const Navbar = (props) => {
  let navItems = props?.data;
  console.log("Navbar ITems : ", navItems);
  return (
    <div>
      <nav className={styles.navigation}>
        <div className={styles.navContainer}>
          <div className={styles.companyLogo}>COMPANY</div>
          <div className={styles.navbarItems}>
            <div className={styles.navbarLinks}>
              {navItems.map((linkData, i) => (
                <NavbarItem key={`key-${i}`} linkData={linkData} />
              ))}
            </div>
            <div className={styles.search}>
              <span className="iconify" data-icon="bytesize:search"></span>
            </div>
            <div className={styles.button}>
              <Button label={"Getting started"} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
