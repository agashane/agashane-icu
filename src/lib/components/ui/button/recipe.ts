import { cva } from "styled-system/css";

export const buttonRecipe = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.5rem",
    fontWeight: "medium",
    gap: "2",
    transition: "color 0.3s ease",
  },
  variants: {
    variant: {
      primary: {
        _hover: {
          color: "teal.700",
        },
      },
    },
  },
});
