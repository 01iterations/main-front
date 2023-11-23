import {
    Hamburger,
    LinkGroup,
    Menu,
    MenuItem,
    Navbar,
    // OraganizationLogoImg,
    OrganizationGroup,
    // OrganizationLogo,
} from "../../components/Nav/nav.styles";

// import logoImg from "/assets/icons/01itersWhite.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
    const [showMenu, setShowMenu] = useState(false);
    const [featureBlock] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <Navbar>
            <OrganizationGroup>
                {/* <OraganizationLogoImg src={logoImg} alt="logo img" /> */}
                {/* <OrganizationLogo>01&nbsp;ITERATIONS </OrganizationLogo> */}
            </OrganizationGroup>
            <LinkGroup>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                {featureBlock && <Link to="/">About</Link>}
                <Link to="/courses">Courses</Link>
                {featureBlock &&<Link to="/">Services</Link>}
                {featureBlock &&<Link to="/contact">Contact</Link>}
            </LinkGroup>
            <Hamburger onClick={toggleMenu}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu show={showMenu}>
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/projects">Projects</MenuItem>
                {featureBlock &&<MenuItem to="/">About</MenuItem>}
                <MenuItem to="/courses">Courses</MenuItem>
                {featureBlock &&<MenuItem to="/">Services</MenuItem>}
                {featureBlock &&<MenuItem to="/">Contact</MenuItem>}
            </Menu>
        </Navbar>
    );
}

export default Nav;
