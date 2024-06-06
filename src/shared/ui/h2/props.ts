import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FontColor, FontWeight } from "shared/common";

export interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  weight?: FontWeight;
  color?: FontColor;
}
