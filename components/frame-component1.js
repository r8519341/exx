import styles from "./frame-component1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.exbtcParent}>
        <h1 className={styles.exbtc}>EXBTC</h1>
        <div className={styles.frameWrapper}>
          <div className={styles.buyCryptoParent}>
            <div className={styles.buyCrypto}>BUY CRYPTO</div>
            <div className={styles.navigationDividersWrapper}>
              <div className={styles.navigationDividers} />
            </div>
            <div className={styles.markets}>MARKETS</div>
            <div className={styles.lineWrapper}>
              <div className={styles.frameChild} />
            </div>
            <div className={styles.trade}>TRADE</div>
            <div className={styles.lineContainer}>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.derivatives}>DERIVATIVES</div>
            <div className={styles.lineFrame}>
              <div className={styles.frameInner} />
            </div>
            <div className={styles.tools}>TOOLS</div>
            <div className={styles.frameDiv}>
              <div className={styles.lineDiv} />
            </div>
            <div className={styles.faq}>FAQ</div>
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <button className={styles.button}>
          <div className={styles.signUp}>Sign Up</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent1;
