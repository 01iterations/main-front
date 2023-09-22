import {
    Hamburger,
    LinkGroup,
    Menu,
    MenuItem,
    Navbar,
    OraganizationLogoImg,
    OrganizationGroup,
    OrganizationLogo,
} from "../../components/Nav/nav.styles";

import logoImg from "../../assets/icons/01itersWhite.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <Navbar>
            <OrganizationGroup>
                <OraganizationLogoImg src={logoImg} alt="logo img" />
                <OrganizationLogo>01&nbsp;ITERATIONS </OrganizationLogo>
            </OrganizationGroup>
            <LinkGroup>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/">Services</Link>
                <Link to="/contact">Contact</Link>
            </LinkGroup>
            <Hamburger onClick={toggleMenu}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu show={showMenu}>
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/">About</MenuItem>
                <MenuItem to="/projects">Projects</MenuItem>
                <MenuItem to="/">Courses</MenuItem>
                <MenuItem to="/">Services</MenuItem>
                <MenuItem to="/">Contact</MenuItem>
            </Menu>
        </Navbar>
    );
}

export default Nav;
