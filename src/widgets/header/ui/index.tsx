import styles from "./styles.module.scss";
import { IProps } from "./props";
import { LinkBase, Logo } from "shared/ui";
import { navLinks } from "shared/common";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

const iconItems = [
  {
    name: "account-alert",
    alt: "Account Alert",
    href: "/login",
  },
  {
    name: "heart",
    alt: "Wishlist",
    href: "/wishlist",
  },
  {
    name: "shopping-cart",
    alt: "Shopping Cart",
    href: "/cart",
  },
];

export const Header = (props: IProps) => {
  return (
    <header className={styles.container}>
      <div className={classNames("wrapper", styles.content)}>
        <Logo />
        <nav className={styles.nav}>
          <ul className={styles.mavLists}>
            {navLinks.map((navItem, index) => (
              <li key={index} className={styles.list}>
                <LinkBase name={navItem.name} href={navItem.href} />
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.icons}>
          <button className={styles.searchBtn}>
            <Image
              src={"/img/utils/search.svg"}
              alt={"Search"}
              width={28}
              height={28}
              className={styles.icon}
            />
          </button>
          {iconItems.map((ic, index) => (
            <Link key={ic.name} href={ic.href} className={styles.iconLink}>
              <Image
                src={`/img/utils/${ic.name}.svg`}
                alt={ic.alt}
                width={28}
                height={28}
                className={styles.icon}
              />
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
