import { useTranslation } from "react-i18next";
import PlanCard from "src/components/PlanCard/PlanCard";
import { PlanJson, plans } from "src/configs/json/pricingPlans";
import styles from "./PricingPlans.module.scss";
// import PlanCard from "./PlanCard";
const PricingPlans = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.subText}>
          <span className={styles.text}>{t(PlanJson?.subText)}</span>
        </div>
        <div className={styles.heading}>
          <span>{t(PlanJson?.header)}</span>
        </div>
        <div className={styles.cardWrapper}>
          {plans?.map((plan, index) => {
            return (
              <div
                key={`cards-${index}`}
                className={styles.cardContainer}
                style={{
                  height: `${
                    t(plan?.header).toLowerCase() === "standard" ? "440px" : ""
                  }`,
                }}
              >
                <PlanCard data={plan} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default PricingPlans;
