import styles from "./group-component1.module.css";

const GroupComponent1 = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.dataAccessParent}>
        <div className={styles.dataAccess} />
        <div className={styles.div}>202</div>
      </div>
      <div className={styles.parent}>
        <div className={styles.div1}>55</div>
        <input className={styles.chatbox2} type="checkbox" />
      </div>
      <div className={styles.group}>
        <div className={styles.div2}>12</div>
        <img
          className={styles.arrowUndo1Icon}
          alt=""
          src="/arrowundo-1-1.svg"
        />
      </div>
    </div>
  );
};

export default GroupComponent1;
