import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";

export const Button = (props: IProps) => {
  const {
    children,
    type,
    onClick,
    className,
    disabled,
    size = "sm",
    color = "clrPrimary",
    variant = "primary",
    radius = "r-none",
    ...otherProps
  } = props;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        styles.content,
        className,
        styles[variant],
        styles[size],
        styles[color],
        styles[radius],
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
