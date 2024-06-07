import styles from "./styles.module.scss";
import { IProps } from "./props";
import { formatPrice } from "shared/common";

export const PriceLineThrough = ({ price }: IProps) => {
  return <p className={styles.content}>${formatPrice(price)}</p>;
};
