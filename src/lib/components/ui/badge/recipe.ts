import { cva } from "styled-system/css";

export const badgeRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    p: "1",
    rounded: "xl",
  },
  variants: {
    variant: {
      default: {
        color: "red.500",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
