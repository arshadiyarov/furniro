import Link from "next/link";
import Image from "next/image";
import { IProps } from "./props";

export const Logo = ({ width = 185, height = 41 }: IProps) => {
  return (
    <Link href={"/"} className={"w-fit"}>
      <Image
        src={"/img/utils/logo.svg"}
        alt={"Furniro"}
        width={width}
        height={height}
      />
    </Link>
  );
};
