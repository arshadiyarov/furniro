import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";

export const InputSubscribe = (props: IProps) => {
  const { placeholder, className, value, onChange, id, ...otherProps } = props;

  return (
    <input
      id={id}
      placeholder={placeholder}
      className={classNames(styles.content, className)}
      {...otherProps}
    />
  );
};
