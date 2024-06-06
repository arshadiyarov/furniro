import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";

export const P = (props: IProps) => {
  const {
    children,
    className,
    size = "md",
    weight = "normal",
    color = "FPrimary",
    ...otherProps
  } = props;
  return (
    <p
      className={classNames(
        styles.content,
        className,
        styles[size],
        styles[weight],
        styles[color],
      )}
      {...otherProps}
    >
      {children}
    </p>
  );
};
