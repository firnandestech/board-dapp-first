import type { NextPage } from "next";
import { useRouter } from 'next/router'

import Layout from "components/Layout";

import styles from "../../styles/pages/addTile.module.scss";

const AddTile: NextPage = ({history} : any) => {
  const router = useRouter()

  return (
    <Layout>
      <section className={styles.layoutContainer}>
        <div className={styles.addTileHeaderInner}>
          <h1>Add Tile Information</h1>
          <p onClick={()=> router.back()}>
            Back
          </p>
        </div>
      </section>
      <section className={styles.layoutContainer}>
        <div className={styles.addTileContentInner}>
          <div>
            tile
          </div>
          <div>
            Upload & desc
          </div>
          <div>
            payment & price
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AddTile;
