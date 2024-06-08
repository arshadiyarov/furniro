"use client";

import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { BsGridFill, BsViewList } from "react-icons/bs";
import { IoSwapVertical, IoListOutline } from "react-icons/io5";
import { P } from "shared/ui";
import { useState } from "react";

export const ControlPanel = (props: IProps) => {
  const [displayGrid, setDisplayGrid] = useState(true);

  const changeToDisplayGrid = () => {
    setDisplayGrid(true);
  };

  const changeToDisplayViewList = () => {
    setDisplayGrid(false);
  };

  const toggleDisplayGrid = () => {
    setDisplayGrid((prevState) => !prevState);
  };

  return (
    <section className={styles.container}>
      <div className={classNames("wrapper", styles.contentDesktop)}>
        <div className={styles.left}>
          <button className={classNames(styles.btn, styles.hover)}>
            <HiOutlineAdjustmentsHorizontal size={20} />
            <P size={"lg"}>Filter</P>
          </button>
          <button
            className={classNames(styles.btn, displayGrid && styles.active)}
            onClick={changeToDisplayGrid}
          >
            <BsGridFill size={20} />
          </button>
          <button
            className={classNames(styles.btn, !displayGrid && styles.active)}
            onClick={changeToDisplayViewList}
          >
            <BsViewList size={24} />
          </button>
          <div className={styles.separator} />
          <P>Showing 1–16 of 32 results</P>
        </div>
        {/* TODO custom dropdowns */}
        <div className={styles.right}>
          <label htmlFor={"limit"} className={styles.limit}>
            <P size={"lg"}>Show</P>
            <select id="limit">
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={12}>12</option>
              <option value={16}>16</option>
              <option value={20}>20</option>
            </select>
          </label>
          <label htmlFor={"sort"} className={styles.sort}>
            <P size={"lg"}>Sort by</P>
            <select id="sort" defaultValue={"default"}>
              <option value={"default"}>Popularity</option>
              <option value={"default"}>Discount</option>
              <option value={"default"}>Newness</option>
              <option value={"default"}>Ascending prices</option>
              <option value={"default"}>Descending prices</option>
            </select>
          </label>
        </div>
      </div>
      <div className={classNames("wrapper", styles.contentMobile)}>
        {/* TODO custom select options like in TechnoDom */}
        <div className={styles.left}>
          <button
            className={classNames(styles.btn, styles.hover)}
            onClick={toggleDisplayGrid}
          >
            {displayGrid ? <BsGridFill size={28} /> : <BsViewList size={28} />}
          </button>
          <div className={styles.separator} />
          <button className={classNames(styles.btn, styles.hover)}>
            <IoSwapVertical size={28} />
            <P size={"lg"}>Sort by</P>
          </button>
          <div className={styles.separator} />
          <button className={classNames(styles.btn, styles.hover)}>
            <IoListOutline size={28} />
            <P size={"lg"}>Show</P>
          </button>
        </div>
        <div className={styles.right}>
          <button className={classNames(styles.btn, styles.hover)}>
            <HiOutlineAdjustmentsHorizontal size={28} />
            <P size={"lg"}>Filter</P>
          </button>
        </div>
      </div>
    </section>
  );
};
