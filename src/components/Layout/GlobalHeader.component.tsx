import { useState } from 'react';
import {
    HeaderContainer,
    LogoSection,
    Logo,
    LogoText,
    NavigationSection,
    NavLinks,
    StyledNavLink,
    MobileMenuButton,
    MobileMenu,
    MobileMenuLink,
    PartnershipBadge,
    PartnershipLogo,
} from './GlobalHeader.styles';
const HomeNavLogo = 'https://res.cloudinary.com/dwfgm5onf/image/upload/v1757088346/01iterations/assets_home_home-nav-logo.png';
import partnershipLogo from '/assets/footer/partnership.webp';

function GlobalHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <HeaderContainer>
            <LogoSection>
                <Logo src={HomeNavLogo} alt="01iterations Logo" />
                <LogoText>01 ITERATIONS</LogoText>
            </LogoSection>

            <NavigationSection>
                <NavLinks>
                    <StyledNavLink to="/" end>Home</StyledNavLink>
                    <StyledNavLink to="/projects">Projects</StyledNavLink>
                    <StyledNavLink to="/about">About</StyledNavLink>
                    <StyledNavLink to="/courses">Courses</StyledNavLink>
                </NavLinks>

                <PartnershipBadge>
                    <PartnershipLogo src={partnershipLogo} alt="Chaos Academic Partner" />
                </PartnershipBadge>

                <MobileMenuButton onClick={toggleMobileMenu}>
                    <span />
                    <span />
                    <span />
                </MobileMenuButton>
            </NavigationSection>

            <MobileMenu isOpen={isMobileMenuOpen}>
                <MobileMenuLink to="/" end onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                </MobileMenuLink>
                <MobileMenuLink to="/projects" onClick={() => setIsMobileMenuOpen(false)}>
                    Projects
                </MobileMenuLink>
                <MobileMenuLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                    About
                </MobileMenuLink>
                <MobileMenuLink to="/courses" onClick={() => setIsMobileMenuOpen(false)}>
                    Courses
                </MobileMenuLink>
            </MobileMenu>
        </HeaderContainer>
    );
}

export default GlobalHeader;
