"use client";

import styles from "./styles.module.scss";
import { IProps } from "./props";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { Button, H5, P } from "shared/ui";
import {
  IoArrowForward,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";

const slides = [
  {
    id: 0,
    url: "/img/main/inspiration-1.png",
    alt: "inspiration-1",
    page: "01",
    category: "Bed Room",
    title: "Inner Peace",
  },
  {
    id: 1,
    url: "/img/main/inspiration-2.png",
    alt: "inspiration-2",
    page: "02",
    category: "Dining Room",
    title: "Feasting Well",
  },
  {
    id: 2,
    url: "/img/main/inspiration-3.png",
    alt: "inspiration-3",
    page: "03",
    category: "Hallway",
    title: "Welcome Home",
  },
  {
    id: 3,
    url: "/img/main/inspiration-4.png",
    alt: "inspiration-4",
    page: "04",
    category: "Home office",
    title: "Mindful Focus",
  },
];

export const Slider = (props: IProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickNext = () => {
    setActiveIndex((prevState) =>
      prevState === slides.length - 1 ? 0 : prevState + 1,
    );
  };

  const handleClickPrev = () => {
    setActiveIndex((prevState) =>
      prevState === 0 ? slides.length - 1 : prevState - 1,
    );
  };

  const handleClickPage = (id: number) => {
    setActiveIndex(id);
  };

  return (
    <div className={styles.content}>
      <Button
        radius={"r-full"}
        color={"clrSecondary"}
        className={styles.prevBtn}
        onClick={handleClickPrev}
      >
        <IoChevronBack />
      </Button>
      <Button
        radius={"r-full"}
        color={"clrSecondary"}
        className={styles.nextBtn}
        onClick={handleClickNext}
      >
        <IoChevronForward />
      </Button>
      <div
        className={styles.slider}
        style={{ transform: `translateX(-${activeIndex * 98}%)` }}
      >
        {slides.map((s) => (
          <Image
            key={s.id}
            src={s.url}
            alt={s.title}
            width={404}
            height={582}
            className={classNames(
              styles.slide,
              activeIndex === s.id && styles.active,
            )}
          />
        ))}
      </div>
      {slides.map((s) => (
        <div
          key={s.id}
          className={classNames(
            styles.sliderContent,
            activeIndex === s.id && styles.contentShow,
          )}
        >
          <div className={styles.sliderDescription}>
            <div className={styles.top}>
              <P color={"secondary"} weight={"medium"}>
                {s.page}
              </P>
              <div className={styles.dash}></div>
              <P color={"secondary"} weight={"medium"}>
                {s.category}
              </P>
            </div>
            <H5 weight={"semibold"}>{s.title}</H5>
          </div>
          <Button className={styles.goLink}>
            <IoArrowForward />
          </Button>
        </div>
      ))}
      <div className={styles.pagination}>
        {slides.map((s) => (
          <div
            key={s.id}
            onClick={() => handleClickPage(s.id)}
            className={classNames(
              styles.pageItem,
              activeIndex === s.id && styles.active,
            )}
          />
        ))}
      </div>
    </div>
  );
};
