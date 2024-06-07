import styles from "./styles.module.scss";
import { IProps } from "./props";
import Image from "next/image";
import { Button, DiscountBadge, H5, P, PriceLineThrough } from "shared/ui";
import { formatPrice } from "shared/common";
import { gray } from "next/dist/lib/picocolors";

export const ProductCard = (props: IProps) => {
  return (
    <div className={styles.content}>
      <Image
        src={"/img/product/leviosa.png"}
        alt={"Leviosa"}
        width={285}
        height={301}
      />
      <div className={styles.hoverContent}>
        <Button color={"clrSecondary"} className={styles.cartBtn}>
          <P color={"accent"} weight={"semibold"}>
            Add to cart
          </P>
        </Button>
        <div className={styles.btns}>
          <button className={styles.btn}>
            <P color={"white"} weight={"semibold"}>
              Share
            </P>
          </button>
          <button className={styles.btn}>
            <P color={"white"} weight={"semibold"}>
              Compare
            </P>
          </button>
          <button className={styles.btn}>
            <P color={"white"} weight={"semibold"}>
              Like
            </P>
          </button>
        </div>
      </div>
      <div className={styles.info}>
        <H5>Leviosa</H5>
        <P weight={"medium"} color={"secondary"}>
          Stylish cafe chair
        </P>
        <div className={styles.price}>
          <P size={"lg"} weight={"semibold"}>
            ${formatPrice(15.9)}
          </P>
          <PriceLineThrough price={19.2} />
          <DiscountBadge discount={15} />
        </div>
      </div>
    </div>
  );
};
