import {
  FooterContainer,
  FooterLinksListContainer,
  LeftSection,
  LogoContainer,
  MiddleSection,
  PartnershipContainer,
  RightSection,
  SocialMediaContainer,
} from "./Footer.styles";
import partnershipLogo from "../../../public/assets/footer/partnership.png";
import itersLogo from "../../../public/assets/home/home-nav-logo.png";
import { SocialIcon } from "react-social-icons";
import { Phone, FolderMinus, Mail } from "react-feather";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <LeftSection>
        <LogoContainer src={itersLogo} alt="01iterations Logo" />
      </LeftSection>
      <MiddleSection>
        <FooterLinksListContainer>
          <p>About</p>
          <p onClick={() => navigate("about")}>Vision</p>
        </FooterLinksListContainer>
        <FooterLinksListContainer>
          <p>Services</p>
          <p>
            Interior <br /> Design
          </p>
        </FooterLinksListContainer>
        <FooterLinksListContainer>
          <p>Projects</p>
          <p>
            Madrid <br /> Apartment
          </p>
          <p>
            Woord <br /> Court
          </p>
          <p>More...</p>
        </FooterLinksListContainer>
        <FooterLinksListContainer>
          <p>Courses</p>
          <p onClick={() => navigate("courses/1")}>
            Corona <br /> Workflow
          </p>
          <p onClick={() => navigate("courses/2")}>
            Volumetrics <br /> Workshop
          </p>
        </FooterLinksListContainer>
        <FooterLinksListContainer>
          <p>
            <Phone /> Contact
          </p>
          <p>Form</p>
          <p>Email</p>
          <p>Phone</p>
        </FooterLinksListContainer>
      </MiddleSection>
      <RightSection>
        <PartnershipContainer src={partnershipLogo} alt="Chaos Partnership" />
        <SocialMediaContainer>
          <SocialIcon
            url="https://www.behance.net/01iterations"
            target="_blank"
          />
          <SocialIcon
            url="https://www.facebook.com/01iterations"
            target="_blank"
          />
          <SocialIcon
            url="https://www.instagram.com/01iterations/"
            target="_blank"
          />
        </SocialMediaContainer>
      </RightSection>
    </FooterContainer>
  );
}

export default Footer;
