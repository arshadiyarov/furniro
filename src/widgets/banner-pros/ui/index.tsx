import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";
import Image from "next/image";
import { H5, P } from "shared/ui";

const pros = [
  {
    id: 0,
    title: "High Quality",
    subTitle: "Crafted from top materials",
    src: "/img/utils/trophy.svg",
  },
  {
    id: 1,
    title: "Warranty Protection",
    subTitle: "Over 2 years",
    src: "/img/utils/guarantee.svg",
  },
  {
    id: 2,
    title: "Free Shipping",
    subTitle: "Order over 150 $",
    src: "/img/utils/shipping.svg",
  },
  {
    id: 3,
    title: "24 / 7 Support",
    subTitle: "Dedicated support",
    src: "/img/utils/customer-support.svg",
  },
];

export const BannerPros = (props: IProps) => {
  return (
    <section className={styles.container}>
      <div className={classNames("wrapper", styles.content)}>
        {pros.map((p) => (
          <div key={p.id} className={styles.prosItem}>
            <Image src={p.src} alt={p.subTitle} width={60} height={60} />
            <div className={styles.text}>
              <H5 weight={"semibold"}>{p.title}</H5>
              <P color={"lightGray"} weight={"medium"} size={"lg"}>
                {p.subTitle}
              </P>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
