import styled from "styled-components";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
}

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.9);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 1001;
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
`;

export const LogoText = styled.h1`
  font-family: "Caslon Titling MT", serif;
  font-size: 1.2rem;
  font-weight: 300;
  color: white;
  letter-spacing: 2px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;

export const NavigationSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  font-family: "Avenir", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: white;
    transform: translateY(-1px);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 1px;
    background: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const PartnershipBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1rem;
  border-radius: 12px;
  background: linear-gradient(135deg, #ff6b35, #f7931e);
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.2);
  animation: glow 2s ease-in-out infinite alternate;

  @keyframes glow {
    from {
      box-shadow: 0 4px 20px rgba(255, 107, 53, 0.4);
    }
    to {
      box-shadow: 0 6px 30px rgba(255, 107, 53, 0.6);
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.8rem;
  }
`;

export const PartnershipLogo = styled.img`
  height: 24px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(1);

  @media (max-width: 768px) {
    height: 20px;
  }
`;

export const PartnershipText = styled.span`
  font-family: "Avenir", sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    letter-spacing: 0.5px;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  span {
    width: 25px;
    height: 2px;
    background: white;
    margin: 3px 0;
    transition: all 0.3s ease;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(20px);
  z-index: 1000;
  padding: 5rem 2rem 2rem;
  gap: 2rem;
  align-items: center;
  justify-content: flex-start;
`;

export const MobileMenuLink = styled(Link)`
  font-family: "Avenir", sans-serif;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.3s ease;
  padding: 1rem 0;

  &:hover {
    color: white;
    transform: scale(1.05);
  }
`;
