import React from "react";
import Button from "src/components/Button/Button";
import DetailsCard from "src/components/DetailsCard/DetailsCard";
import InfoCard from "src/components/InfoCard/InfoCard";
import { DetailsCardsData } from "src/configs/json/DetailsCards";
import { InfoCardsData } from "src/configs/json/InfoCards";
import styles from "./Services.module.scss";

interface IProps {}

const Services: React.FC<IProps> = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.landingPage}>
          {/* <img
            src="https://images.unsplash.com/photo-1657894825744-1da6d5fbf24d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
            alt="bg-img"
          /> */}
          <div className={styles.textContainer}>
            <div className={styles.headerText}>
              We provide the solutions to grow your business
            </div>
            <div className={styles.textDescription}>
              We help startups and digital agencies launch projects on time,
              with no pain.
            </div>
            <div className={styles.readMoreBtn}>
              <Button label={"Read More"} isPrimary={false} />
            </div>
          </div>
        </div>
        <div className={styles.middleContent}>
          <div className={styles.firstRow}>
            <div className={styles.middleContentLeft}>
              <div className={styles.companyName}>Amazing services</div>
              <div className={styles.companyInfo}>
                We're a creative agency. Ask us about interactive branding.
              </div>
              <div className={styles.readMoreBtn}>
                <Button label={"Read More"} isPrimary={true} />
              </div>
            </div>
            <div className={styles.imageCards}>
              {InfoCardsData.map((cardData) => (
                <InfoCard contentData={cardData} />
              ))}
            </div>
          </div>
          <div className={styles.secondRow}>
            {DetailsCardsData?.map((cardData) => (
              <DetailsCard contentData={cardData} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
