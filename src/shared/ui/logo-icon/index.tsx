import Link from "next/link";
import Image from "next/image";
import { IProps } from "./props";

export const LogoIcon = ({ width = 50, height = 32 }: IProps) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/img/utils/logo-icon.svg"}
        alt={"Logo"}
        width={width}
        height={height}
      />
    </Link>
  );
};
