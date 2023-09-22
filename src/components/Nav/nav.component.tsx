import {
    LinkGroup,
    Navbar,
    OraganizationLogoImg,
    OrganizationGroup,
    OrganizationLogo,
} from "../../components/Nav/nav.styles";

import logoImg from "../../assets/icons/01itersWhite.png";

function Nav() {
    return (
        <Navbar>
            <OrganizationGroup>
                <OraganizationLogoImg src={logoImg} alt="logo img" />
                <OrganizationLogo>01&nbsp;ITERATIONS </OrganizationLogo>
            </OrganizationGroup>
            <LinkGroup>
                <a href={`/`}>Home</a>
                <a href={`/`}>About</a>
                <a href={`/projects`}>Projects</a>
                <a href={`/courses`}>Courses</a>
                <a href={`/services`}>Services</a>
                <a href={`/contact`}>Contact</a>
            </LinkGroup>
        </Navbar>
    );
}

export default Nav;
