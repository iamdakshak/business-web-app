import React, { useState } from "react";
import styles from "./Button.module.scss";

interface IProps {
  label: string;
  isPrimary?: Boolean;
}

const Button: React.FC<IProps> = ({ label, isPrimary = true }) => {
  const [isBtnClicked, setIsButtonClicked] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsButtonClicked(!isBtnClicked)}
        className={`${styles.buttonContainer} ${
          !isPrimary ? styles.secondaryBtn : ""
        }`}
      >
        <label htmlFor="Get Started" className={styles.btnText}>
          {!isBtnClicked ? label : "Clicked"}
        </label>
      </button>
    </>
  );
};

export default Button;
