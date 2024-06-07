import styles from "./styles.module.scss";
import { IProps } from "./props";
import { H5, P } from "shared/ui";
import Link from "next/link";
import { IoChevronForwardSharp } from "react-icons/io5";

export const BlockTitle = ({ title, href }: IProps) => {
  return (
    <div className={styles.content}>
      <Link href={href} className={styles.link}>
        <H5>{title}</H5>
      </Link>
      <Link href={href} className={"flex items-center gap-1"}>
        <P color={"lightGray"}>All</P>
        <IoChevronForwardSharp className={"stroke-lightGray"} />
      </Link>
    </div>
  );
};
