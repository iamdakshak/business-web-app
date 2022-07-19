import React from "react";
import Button from "src/components/Button/Button";
import InfoCard from "src/components/InfoCard/InfoCard";
import { LatestNewsCardsData } from "src/configs/json/LatestNews";
import styles from "./LatestNews.module.scss";

const LatestNews = (props?: any) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.titles}>
          <div className={styles.title}>Latest News</div>
          <div className={styles.headerText}>Thoughts & experiments</div>
        </div>
        <div className={styles.cardsContainer}>
          {LatestNewsCardsData?.map((content) => (
            <InfoCard contentData={content} />
          ))}
        </div>
        <div className="readMoreBtn">
          <Button label="Read more" />
        </div>
      </div>
    </>
  );
};

export default LatestNews;
