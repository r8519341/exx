import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import styles from "./faq.module.css";

const Faq = () => {
  return (
    <div className={styles.faq}>
      <img className={styles.faqChild} alt="" src="/rectangle-21.svg" />
      <FrameComponent1 />
      <div className={styles.faqWrapper}>
        <h1 className={styles.faq1}>FAQ</h1>
      </div>
      <div className={styles.div} />
      <div className={styles.faqInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.howToUse}>How to use u own account?</div>
              <div className={styles.howToRegisterNewAccountWrapper}>
                <div
                  className={styles.howToRegister}
                >{`How to register new account? `}</div>
              </div>
              <div className={styles.inMeAccountsWasBlockedParent}>
                <div className={styles.inMeAccounts}>
                  in me accounts was blocked?
                </div>
                <div className={styles.signUpTo}>
                  Sign up to get $5,020 in Bonuses and Mystery Boxes
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.depositeParent}>
                <h1 className={styles.deposite}>Deposite/</h1>
                <h1 className={styles.withdrawal}>Withdrawal</h1>
              </div>
            </div>
          </div>
          <div className={styles.vectorWrapper}>
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/rectangle-4050.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.div1}>
          Прогресс бар с точным выполненным количеством
        </div>
      </div>
      <main className={styles.vectorParent}>
        <img className={styles.frameInner} alt="" src="/rectangle-12.svg" />
        <img className={styles.ellipseIcon} alt="" src="/ellipse-209.svg" />
        <div className={styles.wrapperEllipse206}>
          <img
            className={styles.wrapperEllipse206Child}
            alt=""
            src="/ellipse-2061.svg"
          />
        </div>
        <button className={styles.button}>
          <div className={styles.signIn}>Sign In</div>
        </button>
        <div className={styles.rectangleDiv} />
        <div className={styles.frameChild1} />
        <div className={styles.frameChild2} />
        <div className={styles.frameChild3} />
        <div className={styles.wrapperEllipse207}>
          <img
            className={styles.wrapperEllipse207Child}
            alt=""
            src="/ellipse-2071.svg"
          />
        </div>
      </main>
      <FrameComponent />
    </div>
  );
};

export default Faq;
