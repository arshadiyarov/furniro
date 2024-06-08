"use client";

import styles from "./styles.module.scss";
import { IProps } from "./props";
import { useRouter } from "next/navigation";
import { ProductCard } from "enteties/product";
import classNames from "classnames";
import { Pagination } from "features/pagination";

const mockProducts = ["1", "2", "3", "4", "5", "6", "7", "8"];

export const BannerProductsList = (props: IProps) => {
  const router = useRouter();

  const handleRoute = (id: string) => {
    router.push(`/shop/${id}`);
  };

  return (
    <section className={styles.container}>
      <div className={classNames("wrapper", styles.content)}>
        <div className={styles.grid}>
          {mockProducts.map((p) => (
            <ProductCard key={p} id={p} handleRoute={handleRoute} />
          ))}
        </div>
        <div className={styles.viewList}>
          {mockProducts.map((p) => (
            <ProductCard key={p} id={p} handleRoute={handleRoute} />
          ))}
        </div>
        <Pagination />
      </div>
    </section>
  );
};
