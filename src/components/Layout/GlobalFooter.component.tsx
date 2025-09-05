import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { Phone, Mail } from 'react-feather';
import {
    FooterContainer,
    FooterContent,
    LeftSection,
    LogoContainer,
    Logo,
    CompanyInfo,
    MiddleSection,
    FooterColumn,
    ColumnTitle,
    ColumnLink,
    RightSection,
    PartnershipSection,
    PartnershipLogo,
    PartnershipText,
    SocialSection,
    SocialLinks,
    CopyrightSection,
} from './GlobalFooter.styles';
import HomeNavLogo from '/assets/home/home-nav-logo.webp';
import partnershipLogo from '/assets/footer/partnership.webp';

function GlobalFooter() {
    const navigate = useNavigate();

    return (
        <FooterContainer>
            <FooterContent>
                <LeftSection>
                    <LogoContainer>
                        <Logo src={HomeNavLogo} alt="01iterations Logo" />
                    </LogoContainer>
                    <CompanyInfo>
                        <p>© 2024 01iterations</p>
                        <p>All rights reserved</p>
                    </CompanyInfo>
                </LeftSection>

                <MiddleSection>
                    <FooterColumn>
                        <ColumnTitle>About</ColumnTitle>
                        <ColumnLink onClick={() => navigate('/about')}>Vision</ColumnLink>
                        <ColumnLink onClick={() => navigate('/about')}>Mission</ColumnLink>
                        <ColumnLink onClick={() => navigate('/about')}>Team</ColumnLink>
                    </FooterColumn>

                    <FooterColumn>
                        <ColumnTitle>Services</ColumnTitle>
                        <ColumnLink>Interior Design</ColumnLink>
                        <ColumnLink>Architecture</ColumnLink>
                        <ColumnLink>Consulting</ColumnLink>
                    </FooterColumn>

                    <FooterColumn>
                        <ColumnTitle>Projects</ColumnTitle>
                        <ColumnLink onClick={() => navigate('/projects')}>All Projects</ColumnLink>
                        <ColumnLink>Madrid Apartment</ColumnLink>
                        <ColumnLink>Wood Court</ColumnLink>
                        <ColumnLink>More...</ColumnLink>
                    </FooterColumn>

                    <FooterColumn>
                        <ColumnTitle>Courses</ColumnTitle>
                        <ColumnLink onClick={() => navigate('/courses/1')}>Corona Workflow</ColumnLink>
                        <ColumnLink onClick={() => navigate('/courses/2')}>Volumetrics Workshop</ColumnLink>
                        <ColumnLink onClick={() => navigate('/courses')}>All Courses</ColumnLink>
                    </FooterColumn>

                    <FooterColumn>
                        <ColumnTitle>Contact</ColumnTitle>
                        <ColumnLink href="tel:+201117610555">
                            <Phone size={16} /> +201117610555
                        </ColumnLink>
                        <ColumnLink href="mailto:hello@01iterations.com">
                            <Mail size={16} /> hello@01iterations.com
                        </ColumnLink>
                    </FooterColumn>
                </MiddleSection>

                <RightSection>
                    <PartnershipSection>
                        <PartnershipLogo src={partnershipLogo} alt="Chaos Academic Partner" />
                    </PartnershipSection>

                    <SocialSection>
                        <SocialLinks>
                            <SocialIcon
                                url="https://www.behance.net/01iterations"
                                target="_blank"
                                style={{ height: 32, width: 32 }}
                            />
                            <SocialIcon
                                url="https://www.facebook.com/01iterations"
                                target="_blank"
                                style={{ height: 32, width: 32 }}
                            />
                            <SocialIcon
                                url="https://www.instagram.com/01iterations/"
                                target="_blank"
                                style={{ height: 32, width: 32 }}
                            />
                        </SocialLinks>
                    </SocialSection>
                </RightSection>
            </FooterContent>

            <CopyrightSection>
                <p>© 2024 01iterations. All rights reserved. | Chaos Academic Partner</p>
            </CopyrightSection>
        </FooterContainer>
    );
}

export default GlobalFooter;
