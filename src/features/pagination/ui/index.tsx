"use client";

import styles from "./styles.module.scss";
import { IProps } from "./props";
import { Button, P } from "shared/ui";
import { useState } from "react";
import classNames from "classnames";
import { mock } from "node:test";

const mockPages = [1, 2, 3, 4, 5];

export const Pagination = (props: IProps) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePageChange = (id: number) => {
    setActiveIndex(id);
  };

  const handleClickNext = () => {
    setActiveIndex((prevState) => prevState + 1);
  };

  const handleClickPrev = () => {
    setActiveIndex((prevState) => prevState - 1);
  };

  return (
    <div className={styles.content}>
      <Button
        variant={"icon"}
        radius={"r-lg"}
        color={"accent"}
        className={styles.btn}
        onClick={handleClickPrev}
        disabled={!(activeIndex > 1)}
      >
        <P size={"lg"}>Prev</P>
      </Button>
      {mockPages.map((p) => (
        <Button
          key={p}
          variant={"icon"}
          radius={"r-lg"}
          color={`${activeIndex === p ? "clrPrimary" : "accent"}`}
          className={classNames(styles.btn, styles.page)}
          onClick={() => handlePageChange(p)}
        >
          <P size={"lg"} color={`${activeIndex === p ? "white" : "primary"}`}>
            {p}
          </P>
        </Button>
      ))}
      <Button
        variant={"icon"}
        radius={"r-lg"}
        color={"accent"}
        className={styles.btn}
        onClick={handleClickNext}
        disabled={!(mockPages.length !== activeIndex)}
      >
        <P size={"lg"}>Next</P>
      </Button>
    </div>
  );
};
