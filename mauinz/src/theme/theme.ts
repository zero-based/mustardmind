import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { Button } from "../components/button/style";

export const theme = extendTheme({
  colors: colors,
  fonts: {
    heading: "Comfortaa",
  },
  components: {
    Button,
  },
});
