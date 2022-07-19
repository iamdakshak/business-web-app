import React from "react";
import Footer from "src/components/Footer/Footer";
import Navbar from "src/components/Navbar/Navbar";
import { NavbarItems } from "src/configs/json/NavbarItems";
import AboutCompany from "../AboutCompany/AboutCompany";
import Difference from "../Difference/Difference";
import LatestNews from "../LatestNews/LatestNews";
import PricingPlans from "../PricingPlans/PricingPlans";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";
import Testimonials from "../Testimonials/Testimonials";
import styles from "./LandingPage.module.scss";

const LandingPage = (props: any) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Navbar data={NavbarItems} />
        <Services />
        <div className={styles.differencesContainer}>
          <Difference />
        </div>
        <PricingPlans />
        <AboutCompany />
        <Testimonials />
        <LatestNews />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
