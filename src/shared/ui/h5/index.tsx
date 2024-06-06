import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";

export const H5 = (props: IProps) => {
  const {
    children,
    className,
    weight = "normal",
    color = "primary",
    ...otherProps
  } = props;
  return (
    <h5
      className={classNames(styles.content, className, styles[weight])}
      {...otherProps}
    >
      {children}
    </h5>
  );
};
