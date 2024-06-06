import Link from "next/link";
import Image from "next/image";
import { IProps } from "./props";

export const LogoText = ({ width = 127, height = 28 }: IProps) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/img/utils/logo-text.svg"}
        alt={"Furniro"}
        width={width}
        height={height}
      />
    </Link>
  );
};
