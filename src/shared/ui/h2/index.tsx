import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";

export const H2 = (props: IProps) => {
  const {
    children,
    className,
    weight = "normal",
    color = "primary",
    ...otherProps
  } = props;
  return (
    <h2
      className={classNames(
        styles.content,
        className,
        styles[weight],
        styles[color],
      )}
      {...otherProps}
    >
      {children}
    </h2>
  );
};
