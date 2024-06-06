import { DetailedHTMLProps, HTMLAttributes } from "react";
import { FontColor, FontSize, FontWeight } from "shared/common";

export interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: FontSize;
  weight?: FontWeight;
  color?: FontColor;
}
