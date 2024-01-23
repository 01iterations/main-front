import {
  FooterContainer,
  FooterLinksListContainer,
  MiddleSection,
  PartnershipContainer,
  RightSection,
  SocialMediaContainer,
} from "./Footer.styles";
import partnershipLogo from "../../../public/assets/footer/partnership.png";
// import itersLogo from "../../../public/assets/home/home-nav-logo.png";
import { SocialIcon } from "react-social-icons";
import { Phone, Mail } from "react-feather";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      {/* <LeftSection>
        <LogoContainer src={itersLogo} alt="01iterations Logo" />
        <div>
          <p>© 2024 01iterations </p>
          <p>All rights reserved</p>
        </div>
      </LeftSection> */}
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
          <p>Contact</p>

          <p>
            <a href="tel:+201117610555">
              <Phone /> +201117610555
            </a>
          </p>

          <p>
            <a
              href="mailto:hello@01iterations.com?Subject=Hey%There"
              target="_blank"
            >
              <Mail /> hello@01iterations.com
            </a>
          </p>
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
