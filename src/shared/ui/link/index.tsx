import { IProps } from "./props";
import Link from "next/link";
import { P } from "shared/ui";

export const LinkBase = ({ href, name }: IProps) => {
  return (
    <Link href={href}>
      <P color={"black"} weight="medium">
        {name}
      </P>
    </Link>
  );
};
