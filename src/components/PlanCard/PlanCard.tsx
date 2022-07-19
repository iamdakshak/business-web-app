import { useTranslation } from "react-i18next";
import styles from "./PlanCard.module.scss";
import check from "src/assets/icons/check.png";
import close from "src/assets/icons/close.png";
import Button from "../Button/Button";

const PlanCard = (props: { data?: any }) => {
  const { data } = props;
  const { t } = useTranslation();
  return (
    <div
      className={`${styles.outerWrapper} ${
        t(data?.header).toLowerCase() === "standard" ? styles.bigPlanCard : ""
      }`}
    >
      <div className={styles.innerWrapper}>
        <div className={styles.header}>
          <div className={styles.headerTextArea}>
            <div className={styles.headerText}>{t(data?.header)}</div>
            {/* <div className={styles.headerDesc}>{t(data?.subText)}</div> */}
          </div>
          <div className={styles.price}>
            <div className={styles.priceBody}>{t(data?.price)}</div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.body}>
          <div className={styles.listItem}>
            {data?.list.map((lists: any, index: any) => {
              return (
                <div key={`lists-${index}`} className={styles.cardContainer}>
                  <span className={styles.icon}>
                    <span
                      className="iconify"
                      data-icon={lists?.icon}
                      style={{ color: `${lists?.iconColor}` }}
                    ></span>
                    {/* <img src={t(lists?.icon) === "check" ? check : close} /> */}
                  </span>
                  <span
                    className={
                      t(lists?.icon) === "check"
                        ? styles.value
                        : styles.disbaledValue
                    }
                  >
                    {t(lists?.value)}
                  </span>
                </div>
              );
            })}
          </div>
          <div className={styles.btnWrapper}>
            <Button label={"Sign up"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PlanCard;
