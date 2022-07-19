import React from "react";
import styles from "./DetailsCard.module.scss";

interface IProps {
  contentData: any;
  //   imgSrc?: string;
}

const DetailsCard: React.FC<IProps> = ({ contentData }) => {
  let { iconImg, iconColor, isTextDark, textLabel } = contentData;

  return (
    <>
      <div className={`${styles.cardContainer} `}>
        <div className={styles.subContainer}>
          <div className={styles.iconContainer}>
            <div
              className={`${styles.icon} ${
                isTextDark ? styles.iconBgDark : ""
              }`}
            >
              <span
                className="iconify"
                data-icon={iconImg}
                style={{ color: `${iconColor ?? ""}` }}
              ></span>
            </div>
          </div>
          <div
            className={`${styles.textLabel} ${
              isTextDark ? styles.textLabelDark : ""
            }`}
          >
            {textLabel}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
