import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

export interface ButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label }) => {
  return <ChakraButton>{label}</ChakraButton>;
};
