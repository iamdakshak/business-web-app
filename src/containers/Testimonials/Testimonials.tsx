import React from "react";
import ProfileCard from "src/components/ProfileCard/ProfileCard";
import { UserTestimonialData } from "src/configs/json/Testimonials";
import styles from "./Testimonials.module.scss";

const Testimonials = (props?: any) => {
  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.titles}>
          <div className={styles.title}>Testimonials</div>
          <div className={styles.headerText}>
            Awesome clients we've worked with
          </div>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.cardItems}>
            {/* {UserTestimonialData?.map((data) => (
              <ProfileCard data={data} />
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
