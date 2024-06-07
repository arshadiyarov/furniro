import styles from "./styles.module.scss";
import { IProps } from "./props";
import { H4, P } from "shared/ui";

export const BannerHeader = ({ title, subTitle }: IProps) => {
  return (
    <div className={"text-center"}>
      <H4 weight={"bold"}>{title}</H4>
      <P size={"lg"} color={"secondary"}>
        {subTitle}
      </P>
    </div>
  );
};
