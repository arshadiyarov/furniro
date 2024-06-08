import styles from "./styles.module.scss";
import { BannerPageHead } from "widgets/banner-page-head";
import { ControlPanel } from "features/control-panel";
import { BannerProductsList } from "widgets/banner-products-list";
import { BannerPros } from "widgets/banner-pros";

export const Shop = () => {
  return (
    <main className={styles.container}>
      <BannerPageHead title={"Shop"} />
      <ControlPanel />
      <BannerProductsList />
      <BannerPros />
    </main>
  );
};
