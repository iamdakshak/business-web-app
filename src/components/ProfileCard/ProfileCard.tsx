import React from "react";
import styles from "./ProfileCard.module.scss";

interface IProps {
  data?: any;
}

const ProfileCard: React.FC<IProps> = (props) => {
  const { imgSrc, userComment, review, userName, userDesignation } =
    props?.data;
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapper_inner}>
          <div className={styles.box_wrapper}>
            <div className={styles.box}>
              <div className={styles.avatar}>
                <img src={`${imgSrc}`} alt="" />
              </div>
              <div className={styles.box_inner}>
                <blockquote className={styles.userComment}>
                  {userComment}
                </blockquote>
                <div className={styles.review}>{review}</div>
                <div className={styles.userName}>{userName}</div>
                <div className={styles.userDesignation}>{userDesignation}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
