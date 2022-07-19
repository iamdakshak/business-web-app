import React from "react";
import Button from "src/components/Button/Button";
import DetailsCard from "src/components/DetailsCard/DetailsCard";
import Footer from "src/components/Footer/Footer";
import InfoCard from "src/components/InfoCard/InfoCard";
import Navbar from "src/components/Navbar/Navbar";
import { DetailsCardsData } from "src/configs/json/DetailsCards";
import { InfoCardsData } from "src/configs/json/InfoCards";
import { NavbarItems } from "src/configs/json/NavbarItems";
import Difference from "../Difference/Difference";
import LatestNews from "../LatestNews/LatestNews";
import PricingPlans from "../PricingPlans/PricingPlans";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";
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
        <LatestNews />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
