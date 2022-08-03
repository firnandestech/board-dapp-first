import Image from "next/image";
import styles from "../../styles/components/feedblock.module.scss";

const FeedBlock = () => {
  return (
    <div className={styles.feedBlockContainer}>
      <div className={styles.feedBlockHeader}>
        <img src={"/FeedBlock/user.png"}/>
        <div className={styles.headerDesc}>
          <h3>Triantoroaji.eth</h3>
          <p>1 days ago</p>
        </div>
      </div>

      <Image src={"/FeedBlock/FeedBlock1.png"} width="250" height="333"/>
      <div className={styles.contentDesc}>
        <h3>I have a cool image for my the project</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's stan...
        </p>
      </div>
    </div>
  );
};

export default FeedBlock;
