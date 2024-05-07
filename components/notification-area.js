import styles from "./notification-area.module.css";

const NotificationArea = () => {
  return (
    <div className={styles.notificationArea}>
      <div className={styles.notificationNestedArea}>
        <div className={styles.bellIconArea}>
          <button className={styles.btnsquare}>
            <img
              className={styles.iconlinearbell}
              alt=""
              src="/iconlinearbell.svg"
            />
          </button>
          <div className={styles.historyArea}>
            <button className={styles.button}>
              <div className={styles.history}>HISTORY</div>
            </button>
            <img
              className={styles.historyAreaChild}
              alt=""
              src="/ellipse-210.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.parent}>
        <button className={styles.button1}>
          <div className={styles.buyUsdt}>BUY USDT</div>
        </button>
        <div className={styles.buyUsdtOptions}>
          <div className={styles.buyUsdtLabelsParent}>
            <div className={styles.buyUsdtLabels}>
              <button className={styles.button2}>
                <div className={styles.buyUsdt1}>BUY USDT</div>
              </button>
            </div>
            <div className={styles.buyUsdtLabels1}>
              <button className={styles.button3}>
                <div className={styles.buyUsdt2}>BUY USDT</div>
              </button>
            </div>
            <div className={styles.buyUsdtContainer}>
              <button className={styles.button4}>
                <div className={styles.buyUsdt3}>BUY USDT</div>
              </button>
            </div>
            <div className={styles.buyUsdtLabels2}>
              <button className={styles.button5}>
                <div className={styles.buyUsdt4}>BUY USDT</div>
              </button>
            </div>
            <div className={styles.buyUsdtRepeat}>
              <button className={styles.button6}>
                <div className={styles.buyUsdt5}>BUY USDT</div>
              </button>
            </div>
            <div className={styles.buyUsdtDuplicate}>
              <button className={styles.button7}>
                <div className={styles.buyUsdt6}>BUY USDT</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buyUsdtExtra}>
        <button className={styles.button8}>
          <div className={styles.buyUsdt7}>BUY USDT</div>
        </button>
      </div>
    </div>
  );
};

export default NotificationArea;
