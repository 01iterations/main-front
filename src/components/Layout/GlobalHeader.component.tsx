import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    HeaderContainer,
    LogoSection,
    Logo,
    LogoText,
    NavigationSection,
    NavLinks,
    NavLink,
    MobileMenuButton,
    MobileMenu,
    MobileMenuLink,
    PartnershipBadge,
    PartnershipLogo,
    PartnershipText,
} from './GlobalHeader.styles';
import HomeNavLogo from '/assets/home/home-nav-logo.webp';
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
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/courses">Courses</NavLink>
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
                <MobileMenuLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
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
                <PartnershipBadge>
                    <PartnershipLogo src={partnershipLogo} alt="Chaos Academic Partner" />
                </PartnershipBadge>
            </MobileMenu>
        </HeaderContainer>
    );
}

export default GlobalHeader;
