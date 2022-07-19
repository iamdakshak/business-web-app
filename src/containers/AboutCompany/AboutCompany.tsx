import React from "react";
import Button from "src/components/Button/Button";
import styles from "./AboutCompany.module.scss";

const AboutCompany = (props?: any) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.wrapper}>
            <div className={styles.middleContentLeft}>
              <div className={styles.companyName}>The difference</div>
              <div className={styles.companyInfo}>
                Experience true business performance increases.
              </div>
              <div className={styles.companyDescription}>
                Ichigo Kurosaki never asked for the ability to see ghosts -- he
                was born with the gift. When his family is attacked by a Hollow
                -- a malevolent lost soul -- Ichigo becomes a Soul Reaper,
                dedicating his life to protecting the innocent and helping the
                tortured spirits themselves find peace.
              </div>
              <div className={styles.readMoreBtn}>
                <Button label={"Read More"} isPrimary={true} />
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.imageContainer}>
                <img
                  src="https://media.istockphoto.com/photos/smiling-female-architect-sitting-at-her-office-desk-picture-id1287459398?k=20&m=1287459398&s=612x612&w=0&h=-BH-AsvbdjM8G-Uc_UabWztbQxFmYstg_Z2-Ix4_IEg="
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
