import styles from "./styles.module.scss";
import { IProps } from "./props";
import { H3, P } from "shared/ui";
import Image from "next/image";
import classNames from "classnames";

export const BannerShareHashtag = (props: IProps) => {
  return (
    <section className={styles.container}>
      <div className={classNames("wrapper", styles.content)}>
        <P size={"lg"} color={"secondary"} weight={"semibold"}>
          Share your setup with
        </P>
        <H3 weight={"bold"} className={styles.title}>
          #FuniroFurniture
        </H3>
      </div>
      <Image
        src={"/img/main/bg-banner-share-hashtag.png"}
        alt={"Share your setup"}
        width={1440}
        height={721}
        className={styles.bg}
      />
    </section>
  );
};
