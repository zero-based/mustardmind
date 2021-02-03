import React from "react"
import { Box, Flex, Stack } from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"

interface IMenuToggleProps {
    color: string;
    isOpen: boolean;
    toggle: () => void;
}

const MenuToggle: React.FC<IMenuToggleProps> = ({ ...props }) => {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={props.toggle}>
            <div>
                {props.isOpen ? <CloseIcon color={props.color} /> : <HamburgerIcon boxSize="1.5em" color={props.color} />}
            </div>
        </Box>
    );
}

export interface INavBarProps {
    brand: React.ReactNode;
    color: string;
}

const NavBarContainer: React.FC = ({ ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            p={4}
            bg={"white"}>
            {props.children}
        </Flex>
    );
}

const BrandContainer: React.FC = ({ ...props }) => {
    return (
        <Flex align="center" ml={[4, 4, 4, 16]} >
            {props.children}
        </Flex>
    );
}

export const NavBar: React.FC<INavBarProps> = ({ ...props }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <NavBarContainer>
            <BrandContainer>
                {props.brand}
            </BrandContainer>
            <MenuToggle isOpen={isOpen} toggle={toggle} color={props.color} />
            <Box
                display={{ base: isOpen ? "block" : "none", md: "block" }}
                flexBasis={{ base: "100%", md: "auto" }}>
                <Stack
                    spacing={8}
                    align="center"
                    justify={["center", "space-between", "flex-end", "flex-end"]}
                    direction={["column", "row", "row", "row"]}
                    p={4}>
                    {props.children}
                </Stack>
            </Box>
        </NavBarContainer>
    );
}