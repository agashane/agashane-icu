import { cva } from "styled-system/css";

export const buttonRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "xl",
    fontWeight: "medium",
    gap: "2",
    px: "4",
    py: "2",
    transition: "color 0.3s ease",
  },
  variants: {
    variant: {
      primary: {
        _hover: {
          color: "slate.800",
          bgColor: "slate.100",
        },
      },
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
