import styles from "./styles.module.scss";
import { IProps } from "./props";
import { BannerMain } from "widgets/banner-main";
import { BannerRange } from "widgets/banner-range";
import { BannerProducts } from "widgets/banner-products/ui";
import { BannerInspiration } from "widgets/banner-inspiration";
import { BannerShareHashtag } from "widgets/banner-share-hashtag";

export const Main = (props: IProps) => {
  return (
    <main className={styles.container}>
      <BannerMain />
      <BannerRange />
      <BannerProducts />
      <BannerInspiration />
      <BannerShareHashtag />
    </main>
  );
};
