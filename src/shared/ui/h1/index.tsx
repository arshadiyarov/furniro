import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";

export const H1 = (props: IProps) => {
  const {
    children,
    className,
    weight = "normal",
    color = "primary",
    ...otherProps
  } = props;
  return (
    <h1
      className={classNames(
        styles.content,
        className,
        styles[weight],
        styles[color],
      )}
      {...otherProps}
    >
      {children}
    </h1>
  );
};
