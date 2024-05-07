import styles from "./frame.module.css";

const Frame = () => {
  return (
    <div className={styles.mainInterface}>
      <div className={styles.balance}>
        <div className={styles.balanceChild} />
        <div className={styles.balanceItem} />
        <div className={styles.totalBalance}>Total balance</div>
        <b className={styles.b}>$5,450.500</b>
        <div className={styles.btn}>
          <img className={styles.icondownload} alt="" src="/icondownload.svg" />
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
        <b className={styles.favorites}>Favorites</b>
        <div className={styles.div}>
          <div className={styles.parent}>
            <b className={styles.b1}>$15,240</b>
            <div className={styles.div1}>0.25%</div>
          </div>
          <div className={styles.component1Parent}>
            <img
              className={styles.component1Icon}
              alt=""
              src="/component-1.svg"
            />
            <div className={styles.btcParent}>
              <div className={styles.btc}>BTC</div>
              <div className={styles.bitcoin}>Bitcoin</div>
            </div>
          </div>
          <img className={styles.graphIcon} alt="" src="/graph1.svg" />
        </div>
        <div className={styles.div2}>
          <div className={styles.group}>
            <b className={styles.b2}>$1,150</b>
            <div className={styles.div3}>0.89%</div>
          </div>
          <div className={styles.component1Group}>
            <img
              className={styles.component1Icon1}
              alt=""
              src="/component-1-1.svg"
            />
            <div className={styles.btcGroup}>
              <div className={styles.btc1}>ETH</div>
              <div className={styles.bitcoin1}>Etherium</div>
            </div>
          </div>
          <img className={styles.graphIcon1} alt="" src="/graph-11.svg" />
        </div>
        <b className={styles.popularCryptocurrency}>Popular cryptocurrency</b>
        <div className={styles.line}>
          <div className={styles.component1Container}>
            <img
              className={styles.component1Icon2}
              alt=""
              src="/component-1-2.svg"
            />
            <div className={styles.nanoParent}>
              <div className={styles.nano}>DOT</div>
              <div className={styles.bitcoin2}>Polkadot</div>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.div4}>$5.288</div>
            <div className={styles.div5}>0.89%</div>
          </div>
          <img className={styles.graphIcon2} alt="" src="/graph-2.svg" />
        </div>
        <div className={styles.line1}>
          <div className={styles.frameDiv}>
            <img
              className={styles.component1Icon3}
              alt=""
              src="/component-1-3.svg"
            />
            <div className={styles.nanoGroup}>
              <div className={styles.nano1}>USDT</div>
              <div className={styles.bitcoin3}>{`Tether `}</div>
            </div>
          </div>
          <div className={styles.parent1}>
            <div className={styles.div6}>$0.999</div>
            <div className={styles.div7}>0.09%</div>
          </div>
          <img className={styles.graphIcon3} alt="" src="/graph-3.svg" />
        </div>
        <div className={styles.line2}>
          <div className={styles.component1Parent1}>
            <img
              className={styles.component1Icon4}
              alt=""
              src="/component-1-4.svg"
            />
            <div className={styles.nanoContainer}>
              <div className={styles.nano2}>DOGE</div>
              <div className={styles.bitcoin4}>Dogecoin</div>
            </div>
          </div>
          <div className={styles.parent2}>
            <div className={styles.div8}>$0.100</div>
            <div className={styles.div9}>0.89%</div>
          </div>
          <img className={styles.graphIcon4} alt="" src="/graph-4.svg" />
        </div>
        <div className={styles.btnsquare}>
          <img
            className={styles.iconlinearbell}
            alt=""
            src="/iconlinearbell1.svg"
          />
        </div>
        <div className={styles.btnsquare1}>
          <img
            className={styles.iconlinearprofile}
            alt=""
            src="/iconlinearprofile2.svg"
          />
        </div>
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
                <div className={styles.navMenuBtnChild} />
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
                <div className={styles.navMenuBtnItem} />
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
                <div className={styles.navMenuBtnInner} />
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
                <div className={styles.rectangleDiv} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame} />
      <div className={styles.frameParent}>
        <div className={styles.exbtcParent}>
          <h1 className={styles.exbtc}>EXBTC</h1>
          <div className={styles.frameWrapper}>
            <div className={styles.buyCryptoParent}>
              <div className={styles.buyCrypto}>BUY CRYPTO</div>
              <div className={styles.dividersWrapper}>
                <div className={styles.dividers} />
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
              <div className={styles.lineWrapper1}>
                <div className={styles.lineDiv} />
              </div>
              <div className={styles.faq}>FAQ</div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.btnsquareParent}>
            <div className={styles.btnsquare2}>
              <img
                className={styles.iconlinearprofile1}
                alt=""
                src="/iconlinearprofile-1.svg"
              />
            </div>
            <div className={styles.btnsquareWrapper}>
              <div className={styles.btnsquare3}>
                <img
                  className={styles.iconlinearbell1}
                  alt=""
                  src="/iconlinearbell-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.mainInterfaceChild}
        alt=""
        src="/rectangle-3.svg"
      />
      <div className={styles.div10} />
      <main className={styles.vectorParent}>
        <img className={styles.rectangleIcon} alt="" src="/rectangle-12.svg" />
        <img className={styles.frameChild1} alt="" src="/rectangle-22.svg" />
        <img className={styles.frameChild2} alt="" src="/rectangle-12.svg" />
        <div className={styles.frameChild3} />
        <div className={styles.frameChild4} />
        <div className={styles.frameChild5} />
        <div className={styles.frameChild6} />
        <div className={styles.wrapperEllipse207}>
          <img
            className={styles.wrapperEllipse207Child}
            alt=""
            src="/ellipse-2072.svg"
          />
        </div>
      </main>
      <div className={styles.frameGroup}>
        <div className={styles.frameParent1}>
          <div className={styles.frameParent2}>
            <div className={styles.totalBalanceParent}>
              <h2 className={styles.totalBalance1}>TOTAL BALANCE:</h2>
              <div className={styles.balanceValue}>100000$</div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent3}>
                <div className={styles.totalBalanceWrapper}>
                  <div className={styles.totalBalance2}>TOTAL BALANCE:</div>
                </div>
                <div className={styles.secondaryBalanceValue}>0.89%</div>
              </div>
            </div>
          </div>
          <div className={styles.parent3}>
            <div className={styles.div11}>
              <div className={styles.deposit1}>Deposit</div>
            </div>
            <button className={styles.button}>
              <div className={styles.div12}>
                <div className={styles.withdraw}>Withdraw</div>
                <div className={styles.withdraw1}>Withdraw</div>
              </div>
            </button>
          </div>
        </div>
        <div className={styles.frameParent4}>
          <div className={styles.frameParent5}>
            <div className={styles.frameParent6}>
              <div className={styles.frameParent7}>
                <div className={styles.iconlinearhomeWrapper}>
                  <img
                    className={styles.iconlinearhome1}
                    alt=""
                    src="/iconlinearhome-1.svg"
                  />
                </div>
                <img
                  className={styles.iconlinearchart1}
                  alt=""
                  src="/iconlinearchart-1.svg"
                />
              </div>
              <button className={styles.button1}>
                <div className={styles.div13}>
                  <div className={styles.history}>HISTORY</div>
                  <div className={styles.history1}>HISTORY</div>
                </div>
              </button>
            </div>
            <div className={styles.frameParent8}>
              <div className={styles.iconlinearfavoriteChartParent}>
                <img
                  className={styles.iconlinearfavoriteChart1}
                  alt=""
                  src="/iconlinearfavoritechart-1.svg"
                />
                <img
                  className={styles.iconlinearemptyWallet1}
                  alt=""
                  src="/iconlinearemptywallet-1.svg"
                />
              </div>
              <button className={styles.button2}>
                <div className={styles.promo}>PROMO</div>
              </button>
            </div>
          </div>
          <button className={styles.button3}>
            <div className={styles.div14}>
              <div className={styles.convert}>Convert</div>
              <div className={styles.convert1}>Convert</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Frame;
