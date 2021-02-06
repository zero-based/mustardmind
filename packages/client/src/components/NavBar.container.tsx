import { Heading, NavBar } from "@mustardmind/mauinz"
import { colors } from "@mustardmind/mauinz/theme/colors";
import { INvaBarTextProps, NavBarItem } from "./NavBarItem";

export interface INavBarContainerProps {
    items: INvaBarTextProps[];
}

export const NavBarContainer: React.FC<INavBarContainerProps> = ({ ...props }) => {
    const Brand =
        <NavBarItem to="/">
            <Heading size="lg" as="h3" color={colors.secondary[700]} fontWeight="900">MustardMind</Heading>
        </NavBarItem>;

    return <NavBar brand={Brand} color={colors.primary[500]}>
        {
            props.items.map(item =>
                <NavBarItem to={item.to}>
                    <Heading size="md" as="h6" color={colors.secondary[700]} fontWeight="900">{item.name}</Heading>
                </NavBarItem>
            )
        }
    </NavBar>;
}