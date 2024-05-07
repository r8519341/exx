import styles from "./group-component.module.css";

const GroupComponent = () => {
  return (
    <div className={styles.featuresList}>
      <h1 className={styles.marketplaceAvailability}>
        Marketplace availability
      </h1>
      <div className={styles.weIntegrateAContainer}>
        <p className={styles.weIntegrateA}>
          We integrate a privacy-first approach in all our products and
          services.
        </p>
        <p className={styles.weAreTransparent}>
          We are transparent about the data we gather from you, clearly stating
          how we utilize and share it.
        </p>
      </div>
      <div className={styles.tokenGrid}>
        <div className={styles.conditionParent}>
          <button className={styles.condition}>
            <div className={styles.arb}>ARB</div>
          </button>
          <button className={styles.inputFilter}>
            <div className={styles.ltc}>LTC</div>
          </button>
          <button className={styles.trigger}>
            <div className={styles.solana}>SOLANA</div>
          </button>
          <button className={styles.compositeFunction}>
            <div className={styles.pepe}>PEPE</div>
          </button>
          <button className={styles.avaxWrapper}>
            <div className={styles.avax}>AVAX</div>
          </button>
          <button className={styles.futures}>
            <div className={styles.xmr}>XMR</div>
          </button>
          <button className={styles.imageHandler}>
            <div className={styles.matic}>MATIC</div>
          </button>
          <button className={styles.scheduler}>
            <div className={styles.tron}>TRON</div>
          </button>
          <button className={styles.logger}>
            <div className={styles.btc}>BTC</div>
          </button>
          <button className={styles.ethWrapper}>
            <div className={styles.eth}>ETH</div>
          </button>
        </div>
        <img
          className={styles.tokenGridChild}
          loading="lazy"
          alt=""
          src="/group-128287.svg"
        />
      </div>
    </div>
  );
};

export default GroupComponent;
