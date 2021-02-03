import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { NavBar } from "./NavBar";
import { Heading, Link } from "@chakra-ui/react";
import { colors } from "../../theme/colors"
import { Button } from "../button/Button";

export default {
  title: "Mauinz/NavBar",
  component: NavBar,
} as Meta;

interface Args {
  brandName: string,
  links: string[]
}

const Template: Story<Args> = (args) => {
  const Brand = <Link>
    <Heading  color={colors.secondary[700]} fontWeight="900">{args.brandName}</Heading>
  </Link>;

  return (
    <NavBar brand={Brand} color={colors.secondary[700]}>
      {args.links.map((link) => {
        return (
          <Link>
            <Heading size="md" color={colors.secondary[700]}>{link}</Heading>
          </Link>
        );
      })}
      <Button mt={4} variant="secondary">Request a demo</Button>
    </NavBar>
  );
}

export const NavigationBar = Template.bind({});
NavigationBar.args = { brandName: "MustardMind", links: ["Features", "Pricing", "Login"] };
