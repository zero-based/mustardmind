import Link from 'next/link'
import { Link as StyledLink } from "@mustardmind/mauinz";

interface INavBarItemProps {
    to: string;
}

export interface INvaBarTextProps extends INavBarItemProps{
    name: string;
}

export const NavBarItem: React.FC<INavBarItemProps> = ({ ...props }) => {
    return (
        <Link href={props.to}>
            <StyledLink>
                {props.children}
            </StyledLink>
        </Link>
    );
}