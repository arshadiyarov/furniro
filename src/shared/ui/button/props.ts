import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import {
  ButtonColor,
  ButtonRadius,
  ButtonSize,
  ButtonVariant,
} from "shared/common";

export interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  radius?: ButtonRadius;
}
