import styles from "./styles.module.scss";
import { IProps } from "./props";
import { Breadcrumb, H2, LogoIcon } from "shared/ui";
import Image from "next/image";

export const BannerPageHead = ({ title }: IProps) => {
  return (
    <section className={styles.container}>
      <LogoIcon />
      <H2 color={"black"} weight={"medium"}>
        {title}
      </H2>
      <Breadcrumb />
    </section>
  );
};
