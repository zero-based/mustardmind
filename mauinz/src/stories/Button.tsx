import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

export interface ButtonProps {
  label: string;
  colorScheme: string;
}

export const Button: React.FC<ButtonProps> = ({ label, colorScheme }) => {
  return <ChakraButton colorScheme={colorScheme}>{label}</ChakraButton>;
};
