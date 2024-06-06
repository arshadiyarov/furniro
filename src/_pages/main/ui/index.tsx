import styles from "./styles.module.scss";
import { IProps } from "./props";
import { BannerMain } from "widgets/banner-main";

export const Main = (props: IProps) => {
  return (
    <main className={styles.container}>
      <BannerMain />
    </main>
  );
};
