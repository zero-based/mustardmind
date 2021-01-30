import React from "react";
import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";

export interface IButtonProps extends ButtonProps {
  variant?: "primary" | "secondary" | "danger";
}

export const Button: React.FC<IButtonProps> = ({ ...props }) => {
  return (
    <ChakraButton variant={props.variant} {...props}>
      {props.children}
    </ChakraButton>
  );
};
