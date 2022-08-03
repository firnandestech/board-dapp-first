import styles from "styles/components/tilesBlock.module.scss";

const TilesBlock = () => {
  return (
    <div className={styles.tileBoardsItem}>
      <div className={styles.tilesDateContainer}>
        <p>26/07</p>
      </div>
      <img
        className={styles.tilesBoard}
        src={"/addTile/tileBoardExample.svg"}
        height="510"
      />
      <img
        className={styles.tilesImage}
        src={"/addTile/tileImage.svg"}
        width="96"
        height="96"
      />
    </div>
  );
};

export default TilesBlock;
