import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src/theme/styles";
import { Global } from "@emotion/react";
import { fonts } from "../src/theme/font-face";

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Global styles={fonts} />
      <Story />
    </ChakraProvider>
  ),
];
