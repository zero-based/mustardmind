import { colors } from "../../theme/colors";

export const Button = {
  sizes: {
    md: {
      fontSize: "16px",
      padding: "16px 32px",
      fontWeight: 600,
      fontFamily: "Comfortaa",
    },
  },
  variants: {
    primary: {
      bg: colors.primary[500],
      color: "white",
      _focus: {
        boxShadow: false,
      },
      _hover: {
        bg: colors.primary[300],
      },
    },
    secondary: {
      bg: colors.secondary[500],
      color: colors.secondary[700],
      _focus: {
        boxShadow: false,
      },
      _hover: {
        bg: colors.secondary[100],
      },
    },
    danger: {
      bg: colors.danger[500],
      color: "white",
      _focus: {
        boxShadow: false,
      },
      _hover: {
        bg: colors.danger[700],
      },
    },
  },
  defaultProps: {
    size: "md",
    variant: "primary",
  },
};
