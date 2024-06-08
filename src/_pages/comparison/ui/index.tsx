import styles from "./styles.module.scss";
import { BannerPageHead } from "widgets/banner-page-head";

export const Comparison = () => {
  return (
    <main className={styles.container}>
      <BannerPageHead title={"Product Comparison"} />
    </main>
  );
};
