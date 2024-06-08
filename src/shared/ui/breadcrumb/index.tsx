"use client";

import styles from "./styles.module.scss";
import { IProps } from "./props";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoChevronForwardSharp } from "react-icons/io5";
import { P } from "shared/ui";
import Link from "next/link";
import { getCapitalized } from "shared/common";
import classNames from "classnames";

export const Breadcrumb = (props: IProps) => {
  const pathname = usePathname();
  const [segments, setSegments] = useState<string[]>([]);

  const breakPathname = (path: string) => {
    const segments = path.split("/").filter((segment) => segment !== "");

    setSegments(["home", ...segments]);
  };

  useEffect(() => {
    breakPathname(pathname);
  }, [pathname]);

  return (
    <div className={styles.content}>
      {segments.map((s, index) => (
        <div key={index} className={styles.breadcrumbItem}>
          <Link href={`${s === "home" ? "/" : `/${s}`}`}>
            <P
              color={"secondary"}
              weight={"light"}
              className={classNames(
                styles.link,
                segments.length === index + 1 && styles.active,
              )}
            >
              {getCapitalized(s)}
            </P>
          </Link>
          {segments.length !== index + 1 && (
            <IoChevronForwardSharp stroke={"var(--clr-text-black)"} />
          )}
        </div>
      ))}
    </div>
  );
};
