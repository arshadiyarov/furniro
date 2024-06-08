import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";
import { Button, H3, P } from "shared/ui";
import { Slider } from "widgets/banner-inspiration/ui/slider";

export const BannerInspiration = (props: IProps) => {
  return (
    <section className={styles.container}>
      <div className={classNames("wrapper", styles.content)}>
        <div className={styles.description}>
          <H3 weight={"bold"}>50+ Beautiful rooms inspiration</H3>
          <P weight={"medium"} color={"secondary"}>
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </P>
          <Button className={"w-[42%]"}>
            <P color={"white"}>Explore More</P>
          </Button>
        </div>
        <div className={styles.right}>
          <div className={styles.sliderContainer}>
            <Slider />
          </div>
        </div>
      </div>
    </section>
  );
};
