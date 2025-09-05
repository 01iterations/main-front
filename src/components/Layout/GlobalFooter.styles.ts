import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const FooterContent = styled.div`
  display: flex;
  padding: 3rem 2rem 2rem;
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 1rem 1rem;
  }
`;

export const LeftSection = styled.div`
  flex: 0 0 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 1024px) {
    flex: none;
    align-items: center;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
`;

export const CompanyInfo = styled.div`
  text-align: center;

  p {
    margin: 0.25rem 0;
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.7);
    font-family: "Avenir", sans-serif;
  }
`;

export const MiddleSection = styled.div`
  flex: 1;
  display: flex;
  gap: 2rem;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 120px;
`;

export const ColumnTitle = styled.h3`
  font-family: "Avenir", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const ColumnLink = styled.a`
  font-family: "Avenir", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #ff6b35;
    transform: translateX(5px);
  }
`;

export const RightSection = styled.div`
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    flex: none;
    align-items: center;
  }
`;

export const PartnershipSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  border-radius: 15px;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.2);
  animation: pulse 3s ease-in-out infinite;

  @keyframes pulse {
    0% {
      box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
    }
    50% {
      box-shadow: 0 12px 35px rgba(255, 107, 53, 0.6);
    }
    100% {
      box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
    }
  }
`;

export const PartnershipLogo = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);
`;

export const PartnershipText = styled.span`
  font-family: "Avenir", sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
`;

export const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    transition: all 0.3s ease;
    filter: grayscale(100%);

    &:hover {
      filter: grayscale(0%);
      transform: scale(1.1);
    }
  }
`;

export const CopyrightSection = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem 2rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  p {
    margin: 0;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
    font-family: "Avenir", sans-serif;
  }
`;
