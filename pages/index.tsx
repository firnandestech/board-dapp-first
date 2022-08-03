import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import Layout from "components/Layout";
import FeedBlock from "components/FeedBlock";
import TilesBlock from "components/TilesBlock";

import styles from "styles/pages/home.module.scss";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className={styles.layoutContainer}>
        <div className={styles.informationInner}>
          <div className={styles.informationDesc}>
            <h1>Web3 Rolling Info Board</h1>
            <p>
              Every sheet is a day, every last 7 days are shown on our main
              page. Add info well into the future. We keep 20% of the street for
              editorial content.
            </p>
          </div>

          <div className={styles.addInfoItem}>
            <h3>Got something to say?</h3>
            <Link href="/add-tile">
              <button className={styles.addInfoBtn}>Add Info</button>
            </Link>
            <div className={styles.priceContainer}>
              <p>
                Price per tile
                <b>1$</b>
              </p>
              <div className={styles.currencyContainer}>
                <Image
                  src={"/home/ethereum-svgrepo-com.svg"}
                  width="24"
                  height="24"
                />
                <Image src={"/home/usdc-coin.svg"} width="24" height="24" />
                <Image src={"/home/solana-sol.svg"} width="24" height="24" />
                <Image
                  src={"/home/binance-coin-bnb.svg"}
                  width="24"
                  height="24"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.layoutContainer}>
        <div className={styles.tyleSectionInner}>
          <div className={styles.tyleMonsterInner}>
            <Image
              src={"/home/MonsterFrontLayerMin.gif"}
              alt="loading..."
              width="507"
              height="1024"
            />
            <Image
              src={"/home/MonsterBackLayerMin.gif"}
              alt="loading..."
              width="507"
              height="1024"
            />
          </div>
          <div className={styles.tileBoardsContainer}>
            <TilesBlock />
            <TilesBlock />
            <TilesBlock />
            <TilesBlock />
            <TilesBlock />
            <TilesBlock />
            <TilesBlock />
          </div>
        </div>
      </section>

      <section className={styles.layoutContainer}>
        <div className={styles.newsletterInner}>
          <h2>All Market Monster Posts</h2>
          <div className={styles.formInput}>
            <input type="text" placeholder="Email collector" />
            <button className={styles.btnNewsletter}>Subscribe</button>
          </div>
        </div>
      </section>

      <section className={styles.feedBlockSection}>
        <div className={styles.feedBlockInner}>
          <FeedBlock />
          <FeedBlock />
          <FeedBlock />
          <FeedBlock />
          <FeedBlock />
          <FeedBlock />
          <FeedBlock />
          <FeedBlock />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
