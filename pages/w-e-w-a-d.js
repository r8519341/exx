import { useState } from "react";
import FrameComponent2 from "../components/frame-component2";
import styles from "./w-e-w-a-d.module.css";

const WEWAD = () => {
  const [rectangleCheckboxChecked, setRectangleCheckboxChecked] =
    useState(true);
  return (
    <div className={styles.wewad}>
      <main className={styles.mainContainer}>
        <div className={styles.wrapperEllipse207}>
          <img
            className={styles.wrapperEllipse207Child}
            alt=""
            src="/ellipse-2071.svg"
          />
        </div>
        <section className={styles.componentParent}>
          <FrameComponent2 />
          <h1 className={styles.exbtc}>EXBTC</h1>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <input
              className={styles.rectangleInput}
              checked={rectangleCheckboxChecked}
              type="checkbox"
              onChange={(event) =>
                setRectangleCheckboxChecked(event.target.checked)
              }
            />
          </div>
          <div className={styles.div} />
        </section>
      </main>
      <div className={styles.additionalElement} />
    </div>
  );
};

export default WEWAD;
