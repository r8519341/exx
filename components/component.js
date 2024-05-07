import { useMemo } from "react";
import styles from "./component.module.css";

const Component = ({
  component1,
  bTC,
  bitcoin,
  prop,
  prop1,
  graph,
  propBackdropFilter,
  propWidth,
  propWidth1,
  propColor,
}) => {
  const divStyle = useMemo(() => {
    return {
      backdropFilter: propBackdropFilter,
    };
  }, [propBackdropFilter]);

  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const priceChangeStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.div} style={divStyle}>
      <div className={styles.frameParent} style={frameDivStyle}>
        <div className={styles.component1Wrapper}>
          <img className={styles.component1Icon} alt="" src={component1} />
        </div>
        <div className={styles.btcParent}>
          <div className={styles.btc}>{bTC}</div>
          <div className={styles.bitcoin}>{bitcoin}</div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.priceValueParent} style={frameDiv1Style}>
          <b className={styles.priceValue}>{prop}</b>
          <div className={styles.priceChange} style={priceChangeStyle}>
            {prop1}
          </div>
        </div>
        <img className={styles.graphIcon} alt="" src={graph} />
      </div>
    </div>
  );
};

export default Component;
