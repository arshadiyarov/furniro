import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";
import { BannerHeader, H5, P } from "shared/ui";
import Image from "next/image";

export const BannerRange = (props: IProps) => {
  return (
    <section className={classNames("wrapper", styles.container, "space-y-10")}>
      <BannerHeader
        title={"Browse The Range"}
        subTitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
      />
      <div className={styles.photos}>
        <figure>
          <Image
            src={"/img/main/dining.png"}
            alt={"Dining"}
            width={389}
            height={488}
          />
          <figcaption className={"text-center mt-2"}>
            <H5 weight={"semibold"}>Dining</H5>
          </figcaption>
        </figure>
        <figure>
          <Image
            src={"/img/main/living.png"}
            alt={"Living"}
            width={389}
            height={488}
          />
          <figcaption className={"text-center mt-2"}>
            <H5 weight={"semibold"}>Living</H5>
          </figcaption>
        </figure>
        <figure>
          <Image
            src={"/img/main/bedroom.png"}
            alt={"Bedroom"}
            width={389}
            height={488}
          />
          <figcaption className={"text-center mt-2"}>
            <H5 weight={"semibold"}>Bedroom</H5>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
