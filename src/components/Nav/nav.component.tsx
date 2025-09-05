import {
    Hamburger,
    LinkGroup,
    Menu,
    MenuNavLink,
    Navbar,
    // OraganizationLogoImg,
    OrganizationGroup,
    // OrganizationLogo,
} from "../../components/Nav/nav.styles";

// import logoImg from "/assets/icons/01itersWhite.webp";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const isActive = (path: string) => {
        const currentPath = location.pathname;
        // Handle both exact matches and when path is root
        if (path === '/') {
            return currentPath === '/';
        }
        return currentPath === path;
    };
    return (
        <Navbar>
            <OrganizationGroup>
                {/* <OraganizationLogoImg src={logoImg} alt="logo img" /> */}
                {/* <OrganizationLogo>01&nbsp;ITERATIONS </OrganizationLogo> */}
            </OrganizationGroup>
            <LinkGroup>
                <NavLink to="/" end className={isActive('/') ? 'active' : ''}>Home</NavLink>
                <NavLink to="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</NavLink>
                <NavLink to="/about" className={isActive('/about') ? 'active' : ''}>About</NavLink>
                <NavLink to="/courses" className={isActive('/courses') ? 'active' : ''}>Courses</NavLink>
            </LinkGroup>
            <Hamburger onClick={toggleMenu}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu show={showMenu}>
                <MenuNavLink to="/" end className={isActive('/') ? 'active' : ''}>Home</MenuNavLink>
                <MenuNavLink to="/projects" className={isActive('/projects') ? 'active' : ''}>Projects</MenuNavLink>
                <MenuNavLink to="/about" className={isActive('/about') ? 'active' : ''}>About</MenuNavLink>
                <MenuNavLink to="/courses" className={isActive('/courses') ? 'active' : ''}>Courses</MenuNavLink>
            </Menu>
        </Navbar>
    );
}

export default Nav;
