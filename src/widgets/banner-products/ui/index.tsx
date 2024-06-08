"use client";

import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";
import { BannerTitle, BlockTitle, Button, P } from "shared/ui";
import { ProductCard } from "enteties/product";
import { useRouter } from "next/navigation";

export const BannerProducts = (props: IProps) => {
  const router = useRouter();

  const handleRoute = (id: string) => {
    router.push(`/shop/${id}`);
  };

  const mockProducts = ["1", "2", "3", "4", "5", "6", "7", "8"];

  return (
    <section className={classNames("wrapper", styles.container, "space-y-10")}>
      <BannerTitle title={"Our Products"} />
      <div className={"space-y-3"}>
        <BlockTitle title={"Newest products"} href={"/shop"} />
        <div className={styles.products}>
          {mockProducts.map((p) => (
            <ProductCard key={p} id={p} handleRoute={handleRoute} />
          ))}
        </div>
      </div>
    </section>
  );
};
