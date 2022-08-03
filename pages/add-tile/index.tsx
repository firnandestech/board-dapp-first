import { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

import Layout from "components/Layout";

import styles from "../../styles/pages/addTile.module.scss";

const AddTile: NextPage = ({ history }: any) => {
  const router = useRouter();
  const [openSelect, setOpenSelect] = useState<boolean>(false);

  const handleOpenSelectCurrency = () => setOpenSelect((prev) => !prev);

  return (
    <Layout>
      <section className={styles.layoutContainer}>
        <div className={styles.addTileHeaderInner}>
          <h1>Add Tile Information</h1>
          <p onClick={() => router.back()}>
            <img src={"/addTile/left-chevron.svg"} width="8" height="16" />
            Back
          </p>
        </div>
      </section>
      <section className={styles.layoutContainer}>
        <div className={styles.addTileContentInner}>
          <div className={styles.tylesContainer}>
            <h2>Select Tiles</h2>
            <img className={styles.tylesBoard} src={"/addTile/tileBoardExample.svg"} height="510" />
            <img className={styles.tylesImage} src={"/addTile/tileImage.svg"} width="96" height="96" />
          </div>
          <div className={styles.InformationContainer}>
            <div className={styles.uploadFileContainer}>
              <h2>Upload File</h2>
              <div className={styles.uploadFileInputBox}>
                <h3>Drag & Drop File Here</h3>
                <p className={styles.orText}>or</p>
                <div className={styles.openFileBrowserContainer}>
                  <button className={styles.openFileBrowserBtn}>
                    Open File Browser
                  </button>
                  <input type="file" />
                </div>
                <p className={styles.sizeRules}>
                  Size per tile = 24 x24 pixels Format in jpg, png, gif
                </p>
              </div>
            </div>

            <div className={styles.descriptionContainer}>
              <h2>title</h2>
              <input placeholder="value" />

              <h2>Description</h2>
              <textarea
                className={styles.descriptionInpuTextarea}
                value={
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                }
                placeholder="description"
              />
            </div>

            <div className={styles.actionButtonContainer}>
              <button className={styles.resetBtn}>Reset</button>
              <button className={styles.saveBtn}>Save</button>
            </div>
          </div>
          <div className={styles.paymentAndPriceContainer}>
            <h2>Payment and Price</h2>

            <div className={styles.checkoutContainer}>
              <p>0 Tiles</p>
              <div className={styles.blockChainCurrencyContainer}>
                <h2 className={styles.total}>14.56</h2>
                <Image
                  src={"/addTile/etherium-icon.svg"}
                  width="24"
                  height="40"
                />
              </div>

              <div
                className={styles.inputSelect}
                onClick={handleOpenSelectCurrency}
              >
                <img src={"/addTile/left-chevron.svg"} width="8" height="16" />
                <div
                  className={`${
                    openSelect
                      ? styles.shadowSelect
                      : styles.currencyItemContainer
                  }`}
                >
                  <div>
                    <p>Choose Currency</p>
                  </div>
                  {openSelect && (
                    <div className={styles.dropDownContainer}>
                      <div>
                        <p>Choose Currency</p>
                      </div>
                      <div>
                        <p>ETH</p>
                      </div>
                      <div>
                        <p>USDC</p>
                      </div>
                      <div>
                        <p>SOL</p>
                      </div>
                      <div>
                        <p>BNB</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button className={styles.payAndUploadBtn}>Pay and Upload</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AddTile;
