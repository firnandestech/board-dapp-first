import Image from "next/image";

import styles from "styles/components/header.module.scss";

const header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div>
          <Image src={"/header/market-monster.svg"}  width="150" height="17" />
        </div>
        <button className={styles.btnWallet}>
          <Image src={"/header/wallet.svg"} width="24" height="21" />
        </button>
      </div>
    </header>
  );
};

export default header;
