import { useMemo } from "react";
import styles from "./line.module.css";

const Line = ({
  component1,
  nANO,
  bitcoin,
  graph,
  prop,
  prop1,
  propWidth,
  propAlignSelf,
}) => {
  const nANOStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className={styles.line}>
      <div className={styles.trendingCoinsWrapper}>
        <div className={styles.trendingCoins}>
          <div className={styles.component1Wrapper}>
            <img className={styles.component1Icon} alt="" src={component1} />
          </div>
          <div className={styles.coinInfo}>
            <div className={styles.nano} style={nANOStyle}>
              {nANO}
            </div>
            <div className={styles.bitcoin}>{bitcoin}</div>
          </div>
        </div>
      </div>
      <img className={styles.graphIcon} alt="" src={graph} />
      <div className={styles.parent}>
        <div className={styles.div}>{prop}</div>
        <div className={styles.placeholderElementsWrapper}>
          <div className={styles.placeholderElements}>{prop1}</div>
        </div>
      </div>
    </div>
  );
};

export default Line;
