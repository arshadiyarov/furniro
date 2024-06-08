import styles from "./styles.module.scss";
import { BannerPageHead } from "widgets/banner-page-head";

export const Cart = () => {
  return (
    <main className={styles.container}>
      <BannerPageHead title={"Cart"} />
    </main>
  );
};
