import React from "react";
import styles from "./InfoCard.module.scss";

interface IProps {
  contentData: any;
  //   imgSrc?: string;
}

const InfoCard: React.FC<IProps> = ({ contentData }) => {
  let {
    iconImg,
    iconColor,
    isTextDark,
    textLabel,
    imgSrc,
    isLatestNews,
    date,
    authorName,
    authorImg,
  } = contentData;

  return (
    <>
      <div
        className={`${styles.cardContainer} ${
          isLatestNews && styles.latestNewsCardWidth
        }`}
      >
        <div className={styles.subContainer}>
          {imgSrc && (
            <img
              src={`${imgSrc ?? ""}`}
              alt=""
              className={`${imgSrc ? styles.autoResizeImg : ""} ${
                imgSrc && isLatestNews && styles.latestNewsCardImg
              }`}
            />
          )}
          {!isLatestNews ? (
            <>
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
            </>
          ) : (
            <>
              <div className={styles.iconContainer}>
                <div className={styles.date}>{date}</div>
              </div>
              <div
                className={`${styles.textLabel} ${
                  isTextDark ? styles.textLabelDark : ""
                }`}
              >
                {textLabel}
              </div>
              {/* 
                <div className={styles.bottomCardFields}>
                <div
                  className={`${styles.textLabel} ${
                    isTextDark ? styles.textLabelDark : ""
                  }`}
                >
                  {textLabel}
                </div>
                {authorName && (
                  <div className={styles.authorField}>
                    <img src={authorImg} alt="" className={styles.authorImg} />
                    <span className={styles.authorName}>{authorName}</span>
                  </div>
                )}
              </div>
              {authorName && (
                <div className={styles.authorField}>
                  <img src={authorImg} alt="" className={styles.authorImg} />
                  <span className={styles.authorName}>{authorName}</span>
                </div>
              )}
                */}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default InfoCard;
