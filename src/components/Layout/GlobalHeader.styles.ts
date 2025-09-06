import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
}

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  height: 80px;

  @media (max-width: 768px) {
    padding: 1rem;
    height: 70px;
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

export const StyledNavLink = styled(NavLink)`
  font-family: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    color: #ffffff;
    opacity: 0.7;
    transform: translateY(-1px);
  }

  &.active {
    color: #ffffff;
    font-weight: 500;

    &::after {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 0;
      right: 0;
      height: 1px;
      background-color: #ffffff;
      opacity: 0.8;
    }
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
  padding: 0.75rem;
  z-index: 1001;
  border-radius: 8px;
  transition: all 0.3s ease;

  span {
    width: 24px;
    height: 2px;
    background: #ffffff;
    margin: 3px 0;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 1px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);

    span {
      background: #ffffff;
      opacity: 0.8;
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(20px);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 999;
  padding: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: ${({ isOpen }) =>
    isOpen
      ? "slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
      : "slideUp 0.3s ease"};

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
`;

export const MobileMenuLink = styled(NavLink)`
  font-family: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 0.03em;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 1.5rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
  position: relative;
  overflow: hidden;

  &:last-child {
    border-bottom: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.5s ease;
  }

  &:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.05);
    transform: translateX(8px);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateX(4px);
    background-color: rgba(255, 255, 255, 0.08);
  }

  &.active {
    color: #ffffff;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.08);

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
      height: 20px;
      background-color: #ffffff;
      opacity: 0.8;
    }
  }
`;
