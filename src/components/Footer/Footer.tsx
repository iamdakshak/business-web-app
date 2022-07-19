// import { Button, TextField } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { FooterJson } from "src/configs/json/footer";
import styles from "./Footer.module.scss";
// import { Icon } from "@iconify/react";
import image from "../../assets/images/img2.jpg";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}>
        {/* <div className={styles.header}>
          <span className={styles.headerText}>{t(FooterJson?.title)}</span>
          <div className={styles.btnWrapper}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              value="Submit"
              className={styles.getStartedButton}
              disableElevation={true}
              disableFocusRipple={true}
              disableRipple={true}
              disableTouchRipple={true}
            >
              <span className={styles.buttonText}>
                {t(FooterJson?.contact)}
              </span>
            </Button>
          </div>
        </div>
        <div className={styles.separator}></div> */}
        <div className={styles.body}>
          <div className={styles.contact}>
            <span className={styles.subTitle}>{t(FooterJson?.title1)}</span>
            <span className={styles.mail}>
              {/* <Icon icon="arcticons:huawei-email" /> */}
              <span
                className="iconify"
                data-icon="arcticons:huawei-email"
                style={{ color: "#0096ff" }}
              ></span>
              {t(FooterJson?.mail)}
            </span>
            <span className={styles.number}>
              <span
                className="iconify"
                data-icon="fluent:call-32-regular"
                style={{ color: "#0096ff" }}
              ></span>
              {t(FooterJson?.number)}
            </span>
            <span className={styles.address}>{t(FooterJson?.address)}</span>
          </div>
          <div className={styles.linksSection}>
            <span className={styles.extraLinks}>{t(FooterJson?.extra)}</span>
            <span className={styles.links}>
              <div className={styles.linkSection1}>
                {FooterJson?.links.map((link, index) => {
                  return (
                    <div key={`link-${index}`} className={styles.linkContainer}>
                      <span className={styles.linkValue}>{t(link?.link)}</span>
                    </div>
                  );
                })}
              </div>
              <div className={styles.linkSection1}>
                {FooterJson?.link2.map((link, index) => {
                  return (
                    <div key={`link-${index}`} className={styles.linkContainer}>
                      <span className={styles.linkValue}>{t(link?.link)}</span>
                    </div>
                  );
                })}
              </div>
            </span>
          </div>
          <div className={styles.posts}>
            <span className={styles.postHeading}>
              {t(FooterJson?.postHeading)}
            </span>
            <div className={styles.postContainer}>
              {FooterJson?.posts.map((post, index) => {
                return (
                  <div className={styles.postWrapper}>
                    <div className={styles.imgWrapper}>
                      <img src={image} />
                    </div>
                    <div className={styles.content}>
                      <span className={styles.title}>{t(post?.title)}</span>
                      <span className={styles.date}>
                        <span
                          className="iconify"
                          data-icon="akar-icons:calendar"
                          style={{ color: "#0096ff" }}
                        ></span>
                        {t(post?.date)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.media}>
            <div className={styles.mediaHeader}>{t(FooterJson?.media)}</div>
            <div className={styles.textbox}>
              <input type="text" placeholder={t(FooterJson?.placeholder)} />
              <span
                className="iconify"
                data-icon="bi:arrow-right"
                style={{ color: "#0096ff" }}
              ></span>
            </div>
            <div className={styles.update}>{t(FooterJson?.updates)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
