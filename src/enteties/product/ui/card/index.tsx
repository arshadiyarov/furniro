import styles from "./styles.module.scss";
import { IProps } from "./props";
import Image from "next/image";
import { Button, DiscountBadge, H5, P, PriceLineThrough } from "shared/ui";
import { formatPrice } from "shared/common";
import { gray } from "next/dist/lib/picocolors";
import classNames from "classnames";

const cardButtons = [
  {
    id: 1,
    title: "Share",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="#fff"
      >
        <path d="M12 10.667c-.525 0-1 .206-1.356.538L5.94 8.467C5.973 8.313 6 8.16 6 8c0-.16-.027-.313-.06-.467l4.7-2.74A1.997 1.997 0 0014 3.333c0-1.106-.893-2-2-2s-2 .894-2 2c0 .16.027.314.06.467l-4.7 2.74A1.997 1.997 0 002 8a1.997 1.997 0 003.36 1.46l4.699 2.745c-.038.151-.058.306-.059.462a2 2 0 102-2z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Compare",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="#fff"
      >
        <path d="M10.08 7l1 1 3.44-3.45L11 1l-1 1 1.8 1.8H2v1.4h9.82L10.08 7zM5.86 9l-1-1-3.44 3.5L4.91 15l1-1-1.81-1.8H14v-1.4H4.1L5.86 9z"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Like",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        stroke="#fff"
      >
        <path
          strokeWidth="1.8"
          d="M8 14.036c-13.333-7.37-4-15.37 0-10.31 4-5.06 13.333 2.94 0 10.31z"
        ></path>
      </svg>
    ),
  },
];

export const ProductCard = ({ handleRoute, id }: IProps) => {
  return (
    <div className={styles.content} onClick={() => handleRoute(id)}>
      <Image
        src={"/img/product/leviosa.png"}
        alt={"Leviosa"}
        width={285}
        height={301}
      />
      <button
        onClick={(e) => e.stopPropagation()}
        className={styles.likeMobile}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 28 28"
        >
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.167 3.5c-3.221 0-5.833 2.585-5.833 5.775 0 2.575 1.02 8.686 11.069 14.863a1.149 1.149 0 001.194 0c10.049-6.177 11.07-12.288 11.07-14.863 0-3.19-2.612-5.775-5.834-5.775C16.614 3.5 14 7 14 7s-2.612-3.5-5.833-3.5z"
          ></path>
        </svg>
      </button>
      <div className={styles.hoverContent}>
        <Button
          color={"clrSecondary"}
          className={styles.cartBtn}
          onClick={(e) => e.stopPropagation()}
        >
          <P color={"accent"} weight={"semibold"}>
            Add to cart
          </P>
        </Button>
        <div className={styles.btns}>
          {cardButtons.map((b) => (
            <button
              key={b.id}
              className={styles.btn}
              onClick={(e) => e.stopPropagation()}
            >
              {b.svg}
              <P color={"white"} weight={"semibold"}>
                {b.title}
              </P>
            </button>
          ))}
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
