import styles from "./styles.module.scss";
import { BannerPageHead } from "widgets/banner-page-head";

export const Wishlist = () => {
  return (
    <main className={styles.container}>
      <BannerPageHead title={"Wishlist"} />
    </main>
  );
};
