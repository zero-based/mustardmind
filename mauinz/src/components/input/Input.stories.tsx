import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { InputProps } from "@chakra-ui/react";

import { Input } from "./Input";

export default {
  title: "Mauinz/Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = { placeholder: "Your input goes here...", value: "" };
