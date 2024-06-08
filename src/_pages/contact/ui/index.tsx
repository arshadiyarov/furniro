import styles from "./styles.module.scss";
import { BannerPageHead } from "widgets/banner-page-head";

export const Contact = () => {
  return (
    <main className={styles.container}>
      <BannerPageHead title={"Contact"} />
    </main>
  );
};
