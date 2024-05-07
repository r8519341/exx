import styles from "./frame-component2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.headerBackgroundParent}>
      <div className={styles.headerBackground} />
      <img className={styles.componentChild} alt="" src="/rectangle-4047.svg" />
      <img className={styles.componentItem} alt="" src="/rectangle-23.svg" />
      <div className={styles.div}>
        Прогресс бар с точным выполненным количеством
      </div>
      <h1 className={styles.exxbtc}>EXXBTC</h1>
      <div className={styles.rules}>Rules</div>
      <div className={styles.com}>com</div>
      <div className={styles.com1}>com</div>
      <div className={styles.rules1}>Rules</div>
      <div className={styles.com2}>com</div>
      <div className={styles.com3}>com</div>
      <div className={styles.com4}>com</div>
      <div className={styles.com5}>com</div>
      <div className={styles.navigation}>
        <div className={styles.navigationItems}>
          <form className={styles.signUpArea}>
            <div className={styles.signUpButton}>
              <h1 className={styles.signUp}>Sign up</h1>
            </div>
            <div className={styles.loginArea}>
              <div className={styles.loginForm}>
                <div className={styles.loginButton}>
                  <div className={styles.login}>Login</div>
                </div>
                <div className={styles.passwordField}>
                  <div className={styles.passwordInput}>
                    <div className={styles.passwordBackground} />
                  </div>
                  <div className={styles.password}>Password</div>
                </div>
                <div className={styles.newAccountArea}>
                  <div className={styles.newAccountBackground} />
                </div>
                <div className={styles.newAccountButton}>
                  <div className={styles.createNewAcconut}>
                    Create new acconut
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.socialLogin}>
              <div className={styles.socialButtonArea}>
                <button className={styles.button}>
                  <div className={styles.signUp1}>Sign UP</div>
                </button>
              </div>
              <div className={styles.orUse}>OR USE</div>
              <div className={styles.socialIconArea}>
                <div className={styles.socialIconImage}>
                  <button className={styles.button1}>
                    <img
                      className={styles.image2Icon}
                      alt=""
                      src="/image-2@2x.png"
                    />
                  </button>
                  <div className={styles.div1}>
                    <img
                      className={styles.image1Icon}
                      loading="lazy"
                      alt=""
                      src="/image-1@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.footer}>
          <div className={styles.footerContent}>
            <div className={styles.progressAndContact}>
              <div className={styles.div2}>
                Прогресс бар с точным выполненным количеством
              </div>
            </div>
            <div className={styles.contact}>Contact</div>
          </div>
        </div>
        <footer className={styles.secondColumnParent}>
          <div className={styles.secondColumn}>
            <div className={styles.secondColumnContent}>TEXT</div>
            <div className={styles.secondColumnContent1}>TEXT</div>
          </div>
          <div className={styles.firstColumn}>
            <div className={styles.firstColumnContent}>TEXT</div>
          </div>
          <div className={styles.firstColumn1}>
            <div className={styles.text}>TEXT</div>
          </div>
          <div className={styles.thirdColumnArea}>
            <div className={styles.thirdColumn}>
              <div className={styles.thirdColumnContent}>TEXT</div>
              <div className={styles.thirdColumnContent1}>TEXT</div>
            </div>
          </div>
          <div className={styles.fourthColumn}>
            <div className={styles.fourthColumnContent}>TEXT</div>
            <div className={styles.fourthColumnContent1}>TEXT</div>
          </div>
          <button className={styles.button2}>
            <div className={styles.support}>SUPPORT</div>
          </button>
        </footer>
      </div>
      <div className={styles.contact1}>Contact</div>
      <div className={styles.image2} />
      <img className={styles.componentInner} alt="" src="/ellipse-210.svg" />
      <div className={styles.supportInfo}>
        <div className={styles.div3}>
          <div className={styles.support1}>SUPPORT</div>
          <img className={styles.child} alt="" src="/ellipse-210.svg" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
