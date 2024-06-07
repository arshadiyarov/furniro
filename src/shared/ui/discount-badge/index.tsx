import styles from "./styles.module.scss";
import { IProps } from "./props";

export const DiscountBadge = ({ discount }: IProps) => {
  return <span className={styles.content}>-{discount}%</span>;
};
