import styles from "./footer-links.module.css";

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.linkColumnsParent}>
        <div className={styles.linkColumns}>
          <div className={styles.linkLabels}>
            <h1 className={styles.rules}>Rules</h1>
            <h1 className={styles.com}>com</h1>
          </div>
        </div>
        <div className={styles.linkColumns1}>
          <div className={styles.comParent}>
            <h1 className={styles.com1}>com</h1>
            <h1 className={styles.rules1}>Rules</h1>
          </div>
        </div>
        <div className={styles.subLinks}>
          <div className={styles.comGroup}>
            <h1 className={styles.com2}>com</h1>
            <h1 className={styles.com3}>com</h1>
          </div>
        </div>
        <div className={styles.linkColumns2}>
          <h1 className={styles.com4}>com</h1>
        </div>
        <div className={styles.linkColumns3}>
          <h1 className={styles.com5}>com</h1>
        </div>
        <div className={styles.div}>
          <h1 className={styles.support}>SUPPORT</h1>
          <div className={styles.iconWrapper}>
            <img className={styles.icon} alt="" src="/icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
