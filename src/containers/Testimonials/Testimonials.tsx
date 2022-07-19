import React from "react";
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
      </div>
    </>
  );
};

export default Testimonials;
