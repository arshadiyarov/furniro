import styles from "./styles.module.scss";
import { IProps } from "./props";
import { H3 } from "shared/ui";

export const BannerTitle = ({ title }: IProps) => {
  return (
    <H3 weight={"bold"} className={"text-center"}>
      {title}
    </H3>
  );
};
