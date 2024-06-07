import styles from "./styles.module.scss";
import { IProps } from "./props";
import classNames from "classnames";
import {
  ButtonSubscribe,
  InputSubscribe,
  LinkBase,
  LogoText,
  P,
} from "shared/ui";
import { navLinks } from "shared/common";
import Link from "next/link";
import { black } from "next/dist/lib/picocolors";

const helpItems = ["Payment Options", "Returns", "Privacy Policies"];

export const Footer = (props: IProps) => {
  return (
    <footer className={styles.container}>
      <div className={classNames("wrapper", styles.content)}>
        <div className={styles.top}>
          <div className={styles.description}>
            <LogoText width={85} height={24} />
            <div>
              <P color={"lightGray"}>
                400 University Drive Suite 200 Coral Gables,
              </P>
              <P color={"lightGray"}>FL 33134 USA</P>
            </div>
          </div>
          <div className={styles.links}>
            <ul className={styles.list}>
              <li>
                <P color={"lightGray"} weight={"medium"}>
                  Links
                </P>
              </li>
              {navLinks.map((li, index) => (
                <li key={index}>
                  <LinkBase href={li.href} name={li.name} />
                </li>
              ))}
            </ul>
            <ul className={styles.list}>
              <li>
                <P color={"lightGray"} weight={"medium"}>
                  Help
                </P>
              </li>
              {helpItems.map((li, index) => (
                <li key={index}>
                  <LinkBase href={li} name={li} />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.subscribe}>
            <P color={"lightGray"} weight={"medium"}>
              Newsletter
            </P>
            <div className={"flex items-center gap-3"}>
              <InputSubscribe placeholder={"Enter Your Email Address"} />
              <ButtonSubscribe />
            </div>
          </div>
        </div>
        <div className={styles.line} />
        <P className={styles.copy} color={"black"}>
          &copy;2024 Funiro. All right reserved
        </P>
      </div>
    </footer>
  );
};
