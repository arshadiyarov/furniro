import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";

export const BannerMain = (props: IProps) => {
  return (
    <section className={styles.container}>
      <div className={classNames("wrapper", styles.content)}></div>
    </section>
  );
};
