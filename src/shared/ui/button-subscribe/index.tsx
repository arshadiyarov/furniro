import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";

export const ButtonSubscribe = (props: IProps) => {
  const { id, onClick, type, className, ...otherProps } = props;
  return (
    <button
      id={id}
      onClick={onClick}
      className={classNames(styles.content, className)}
      {...otherProps}
    >
      <p>Subscribe</p>
    </button>
  );
};
