import React from "react";
import Button from "src/components/Button/Button";
import styles from "./Subscribe.module.scss";

const Subscribe = (props?: any) => {
  return (
    <>
      <div className={styles.subscribeWrapper}>
        <div className={styles.container}>
          <div className={styles.contentLeft}>
            <span className={styles.text1}>
              Ready to improve your experience
            </span>
            <div className={styles.text2}>With Busin Technology?</div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.emailContainer}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your e-mail"
                className={styles.emailField}
              />
            </div>
            <div className={styles.subscribeButton}>
              <Button label="Subscribe" />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
