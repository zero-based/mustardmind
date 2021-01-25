import React from "react";
import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <ChakraInput
      placeholder={props.placeholder}
      value={props.value}
      {...props}
    />
  );
};
