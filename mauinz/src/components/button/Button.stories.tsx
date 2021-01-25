import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";

import { Button, IButtonProps } from "./Button";

export default {
  title: "Mauinz/Button",
  component: Button,
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { children: "Primary", variant: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { children: "Secondary", variant: "secondary" };

export const Danger = Template.bind({});
Danger.args = { children: "Danger", variant: "danger" };
