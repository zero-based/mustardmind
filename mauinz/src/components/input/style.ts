import { colors } from "../../theme/colors";

export const Input = {
  variants: {
    filled: {
      field: {
        bg: colors.secondary[50],
        color: colors.secondary[700],
        placeholderColor: colors.secondary[700],
        fontSize: "16px",
        padding: "32px 16px",
        borderRadius: "16px",
        _focus: {
          borderColor: "transparent",
          bg: colors.secondary[50],
        },
        _hover: {
          bg: colors.secondary[100],
        },
      },
    },
  },
  defaultProps: {
    variant: "filled",
  },
};
