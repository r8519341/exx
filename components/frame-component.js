import Component from "./component";
import Line from "./line";
import styles from "./frame-component.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.balanceWrapper}>
      <div className={styles.balance}>
        <div className={styles.primaryBalanceIconParent}>
          <div className={styles.primaryBalanceIcon} />
          <div className={styles.secondaryBalanceIcon} />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.btnsquareParent}>
              <div className={styles.btnsquare}>
                <img
                  className={styles.iconlinearprofile}
                  alt=""
                  src="/iconlinearprofile2.svg"
                />
              </div>
              <div className={styles.btnsquare1}>
                <img
                  className={styles.iconlinearbell}
                  alt=""
                  src="/iconlinearbell1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.totalBalanceParent}>
                  <div className={styles.totalBalance}>Total balance</div>
                  <b className={styles.balanceAmount}>$5,450.500</b>
                </div>
                <div className={styles.btnParent}>
                  <div className={styles.btn}>
                    <img
                      className={styles.icondownload}
                      alt=""
                      src="/icondownload.svg"
                    />
                    <div className={styles.deposit}>Deposit</div>
                  </div>
                  <div className={styles.btn1}>
                    <img
                      className={styles.icondownload1}
                      alt=""
                      src="/icondownload-1.svg"
                    />
                    <div className={styles.withraw}>Withraw</div>
                  </div>
                </div>
              </div>
              <div className={styles.favoritesParent}>
                <b className={styles.favorites}>Favorites</b>
                <div className={styles.parent}>
                  <Component
                    component1="/component-1.svg"
                    bTC="BTC"
                    bitcoin="Bitcoin"
                    prop="$15,240"
                    prop1="0.25%"
                    graph="/graph1.svg"
                  />
                  <Component
                    component1="/component-1-1.svg"
                    bTC="ETH"
                    bitcoin="Etherium"
                    prop="$1,150"
                    prop1="0.89%"
                    graph="/graph-11.svg"
                    propBackdropFilter="blur(7px)"
                    propWidth="96px"
                    propWidth1="57px"
                    propColor="#02c173"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.popularCryptocurrencyWrapper}>
              <b className={styles.popularCryptocurrency}>
                Popular cryptocurrency
              </b>
            </div>
            <div className={styles.lineParent}>
              <Line
                component1="/component-1-2.svg"
                nANO="DOT"
                bitcoin="Polkadot"
                graph="/graph-2.svg"
                prop="$5.288"
                prop1="0.89%"
              />
              <Line
                component1="/component-1-3.svg"
                nANO="USDT"
                bitcoin="Tether "
                graph="/graph-3.svg"
                prop="$0.999"
                prop1="0.09%"
                propWidth="unset"
                propAlignSelf="stretch"
              />
              <div className={styles.line}>
                <div className={styles.frameParent2}>
                  <div className={styles.component1Wrapper}>
                    <img
                      className={styles.component1Icon}
                      alt=""
                      src="/component-1-4.svg"
                    />
                  </div>
                  <div className={styles.chartHeaders}>
                    <div className={styles.nano}>DOGE</div>
                    <div className={styles.bitcoin}>Dogecoin</div>
                  </div>
                </div>
                <img className={styles.graphIcon} alt="" src="/graph-4.svg" />
                <div className={styles.group}>
                  <div className={styles.div}>$0.100</div>
                  <div className={styles.wrapper}>
                    <div className={styles.div1}>0.89%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navMenuWrapper}>
          <div className={styles.navMenu}>
            <div className={styles.navMenuChild} />
            <div className={styles.btns}>
              <div className={styles.navMenuBtn}>
                <div className={styles.navMenuBtn1}>
                  <div className={styles.navBarBtn}>
                    <img
                      className={styles.iconlinearhome}
                      alt=""
                      src="/iconlinearhome.svg"
                    />
                  </div>
                  <div className={styles.separator} />
                </div>
              </div>
              <div className={styles.navMenuBtn2}>
                <div className={styles.navMenuBtn3}>
                  <div className={styles.navBarBtn1}>
                    <img
                      className={styles.iconlinearchart}
                      alt=""
                      src="/iconlinearchart.svg"
                    />
                  </div>
                  <div className={styles.navMenuBtnChild} />
                </div>
              </div>
              <div className={styles.navMenuBtn4}>
                <div className={styles.navMenuBtn5}>
                  <div className={styles.navBarBtn2}>
                    <img
                      className={styles.iconlinearfavoriteChart}
                      alt=""
                      src="/iconlinearfavoritechart.svg"
                    />
                  </div>
                  <div className={styles.navMenuBtnItem} />
                </div>
              </div>
              <div className={styles.navMenuBtn6}>
                <div className={styles.navMenuBtn7}>
                  <div className={styles.navBarBtn3}>
                    <img
                      className={styles.iconlinearemptyWallet}
                      alt=""
                      src="/iconlinearemptywallet.svg"
                    />
                  </div>
                  <div className={styles.navMenuBtnInner} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
