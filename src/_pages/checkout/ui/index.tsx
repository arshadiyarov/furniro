import styles from "./styles.module.scss";
import { BannerPageHead } from "widgets/banner-page-head";

export const Checkout = () => {
  return (
    <main className={styles.container}>
      <BannerPageHead title={"Checkout"} />
    </main>
  );
};
