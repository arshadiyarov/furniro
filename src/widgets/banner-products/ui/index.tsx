import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";
import { BannerTitle, BlockTitle, Button, P } from "shared/ui";
import { ProductCard } from "enteties/product";

export const BannerProducts = (props: IProps) => {
  return (
    <section className={classNames("wrapper", styles.container, "space-y-10")}>
      <BannerTitle title={"Our Products"} />
      <div className={"space-y-3"}>
        <BlockTitle title={"Newest products"} href={"/shop"} />
        <div className={styles.products}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};
