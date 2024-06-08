"use client";

import styles from "./styles.module.scss";
import { IProps } from "./props";
import { LinkBase, Logo, LogoIcon, P } from "shared/ui";
import { navLinks } from "shared/common";
import Link from "next/link";
import classNames from "classnames";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

const iconItems = [
  {
    name: "heart",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 28 28"
        className={styles.stroke}
      >
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8.167 3.5c-3.221 0-5.833 2.585-5.833 5.775 0 2.575 1.02 8.686 11.069 14.863a1.149 1.149 0 001.194 0c10.049-6.177 11.07-12.288 11.07-14.863 0-3.19-2.612-5.775-5.834-5.775C16.614 3.5 14 7 14 7s-2.612-3.5-5.833-3.5z"
        ></path>
      </svg>
    ),
    href: "/wishlist",
  },
];

export const Header = (props: IProps) => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavActive((prevState) => !prevState);
  };

  return (
    <header className={styles.container}>
      <div className={classNames("wrapper", styles.content)}>
        <div className={styles.logoDesktop}>
          <Logo />
        </div>
        <div className={styles.logoMobile}>
          <LogoIcon />
        </div>
        <nav className={styles.navDesktop}>
          <ul className={styles.navLists}>
            {navLinks.map((navItem, index) => (
              <li key={index} className={styles.list}>
                <LinkBase name={navItem.name} href={navItem.href} />
              </li>
            ))}
          </ul>
        </nav>
        <nav
          className={classNames(
            styles.navMobile,
            isMobileNavActive && styles.active,
          )}
        >
          <button className={styles.closeBtn} onClick={toggleMobileNav}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
            </svg>
          </button>
          <ul className={styles.navLists}>
            {navLinks.map((navItem, index) => (
              <li key={index} className={styles.list} onClick={toggleMobileNav}>
                <Link href={navItem.href}>
                  <P size={"lg"} weight={"medium"}>
                    {navItem.name}
                  </P>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.icons}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 28 28"
              className={styles.stroke}
            >
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeWidth="2"
                d="M24.5 24.5l-5.233-5.243m2.9-7.007a9.917 9.917 0 11-19.834 0 9.917 9.917 0 0119.834 0v0z"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 28 28"
              className={styles.fill}
            >
              <path
                fill="#000"
                d="M23.334 14V8.167h2.333v7h-2.334m0 4.666h2.334V17.5h-2.334m-11.666-2.333c3.115 0 9.333 1.563 9.333 4.666v3.5H2.334v-3.5c0-3.103 6.218-4.666 9.333-4.666zm0-10.5a4.667 4.667 0 110 9.333 4.667 4.667 0 010-9.333zm0 12.716c-3.465 0-7.117 1.704-7.117 2.45v1.284h14.233v-1.284c0-.746-3.651-2.45-7.116-2.45zm0-10.5a2.45 2.45 0 100 4.9 2.45 2.45 0 000-4.9z"
              ></path>
            </svg>
          </button>
          {iconItems.map((ic, index) => (
            <Link key={ic.name} href={ic.href} className={styles.iconLink}>
              {ic.svg}
            </Link>
          ))}
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 28 28"
              className={styles.fill}
            >
              <path
                fill="#000"
                d="M25.235 19.193H8.952l.818-1.666 13.584-.024a.95.95 0 00.935-.782l1.882-10.53a.95.95 0 00-.933-1.119L7.957 5.015l-.148-.695a.971.971 0 00-.946-.765H2.64a.965.965 0 000 1.93H6.08l.645 3.068 1.59 7.692-2.046 3.339a.956.956 0 00-.082 1.006c.164.325.495.53.861.53h1.717a2.808 2.808 0 002.242 4.493 2.808 2.808 0 002.243-4.493h4.405a2.808 2.808 0 002.242 4.493 2.808 2.808 0 002.242-4.493h3.098c.53 0 .965-.432.965-.965a.968.968 0 00-.968-.962zM8.36 6.918l15.744.052-1.542 8.635-12.367.022-1.835-8.709zm2.65 16.754a.866.866 0 01-.865-.865c0-.475.389-.864.864-.864a.866.866 0 01.612 1.475.864.864 0 01-.611.254zm8.889 0a.866.866 0 01-.864-.865c0-.475.388-.864.864-.864a.866.866 0 01.61 1.475.864.864 0 01-.61.254z"
              ></path>
            </svg>
          </button>
          <button className={styles.burger} onClick={toggleMobileNav}>
            <IoMenu className={styles.stroke} />
          </button>
        </div>
      </div>
    </header>
  );
};
