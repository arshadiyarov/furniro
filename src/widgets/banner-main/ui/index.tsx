"use client";

import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";
import { Button, H1, P } from "shared/ui";
import { useRouter } from "next/navigation";

export const BannerMain = (props: IProps) => {
  const router = useRouter();

  return (
    <section className={styles.container}>
      <div className={classNames("wrapper", styles.content)}>
        <div className={styles.placeholder} />
        <div className={styles.info}>
          <P weight={"semibold"}>New Arrival</P>
          <H1 color={"accent"} weight={"bold"} className={"leading-tight"}>
            Discover Our
            <br />
            New Collection
          </H1>
          <P size={"lg"} weight={"medium"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </P>
          <Button
            size={"lg"}
            className={"w-[40%]"}
            onClick={() => router.push("/shop")}
          >
            <P uppercase weight={"bold"} color={"white"}>
              Buy Now
            </P>
          </Button>
        </div>
      </div>
    </section>
  );
};
