import styles from "./styles.module.scss";
import { BannerPageHead } from "widgets/banner-page-head";

export const Blog = () => {
  return (
    <main className={styles.container}>
      <BannerPageHead title={"Blog"} />
    </main>
  );
};
