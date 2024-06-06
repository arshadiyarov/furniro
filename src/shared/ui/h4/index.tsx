import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";

export const H4 = (props: IProps) => {
  const {
    children,
    className,
    weight = "normal",
    color = "primary",
    ...otherProps
  } = props;
  return (
    <h4
      className={classNames(styles.content, className, styles[weight])}
      {...otherProps}
    >
      {children}
    </h4>
  );
};
