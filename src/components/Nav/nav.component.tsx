import {
    LinkGroup,
    Navbar,
    OraganizationLogoImg,
    OrganizationGroup,
    OrganizationLogo,
} from "../../components/Nav/nav.styles";

import logoImg from "../../assets/icons/01itersWhite.png";
import { Link } from "react-router-dom";

function Nav() {
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
        </Navbar>
    );
}

export default Nav;
