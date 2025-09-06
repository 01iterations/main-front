import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

interface MenuProps {
  show: boolean;
}

export const sizes = {
  xsmall: "320px",
  small: "480px",
  medium: "768px",
  large: "1024px",
  xlarge: "1200px",
  xxlarge: "1440px",
};

export const devices = {
  xsmall: `(max-width: ${sizes.xsmall})`,
  small: `(min-width: ${sizes.xsmall}) and (max-width: ${sizes.small})`,
  medium: `(min-width: ${sizes.small}) and (max-width: ${sizes.medium})`,
  large: `(min-width: ${sizes.medium}) and (max-width: ${sizes.large})`,
  xlarge: `(min-width: ${sizes.large}) and (max-width: ${sizes.xlarge})`,
  xxlarge: `(min-width: ${sizes.xlarge}) and (max-width: ${sizes.xxlarge})`,
};

export const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 900;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  background-color: transparent;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 70px;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  & a {
    font-family: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      sans-serif;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 400;
    color: #ffffff;
    letter-spacing: 0.02em;
    transition: all 0.2s ease;
    position: relative;

    @media (max-width: 768px) {
      display: none;
    }

    @media ${devices.xlarge} {
      font-size: 0.9rem;
    }

    @media ${devices.large} {
      font-size: 0.85rem;
      gap: 2rem;
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

    &:hover {
      color: #ffffff;
      opacity: 0.8;
      transform: translateY(-1px);
    }
  }
`;

export const OraganizationLogoImg = styled.img`
  z-index: 20;
  object-fit: contain;
  padding: 0;
  margin-right: -10px;
  @media ${devices.small} {
    margin-right: -15px;
    transform: scale(0.8);
  }
  /* width: 100px; */
`;
export const OrganizationGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const OrganizationLogo = styled.h3`
  font-family: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  color: #ffffff;
  font-weight: 300;
  font-size: 1.4rem;
  letter-spacing: 0.05em;
  padding: 0;
  margin: 0;
  transition: all 0.2s ease;

  @media ${devices.large} {
    font-size: 1.2rem;
  }

  @media ${devices.small} {
    font-size: 1.1rem;
  }
`;

// mobile

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  padding: 8px;
  transition: all 0.2s ease;

  span {
    height: 2px;
    width: 24px;
    background-color: #ffffff;
    margin-bottom: 4px;
    border-radius: 1px;
    transition: all 0.3s ease;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.div<MenuProps>`
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 899;
  animation: ${({ show }) =>
    show ? "slideDown 0.3s ease" : "slideUp 0.3s ease"};

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
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
      transform: translateY(-10px);
    }
  }
`;

export const MenuItem = styled(Link)`
  width: 100%;
  text-align: center;
  color: white;
  text-decoration: none;
  padding: 1rem;
  opacity: 0.7;
  transition: all 0.3s ease;
  &:active {
    background-color: black;
  }
  &.active {
    opacity: 1;
    font-weight: 600;
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:hover {
    opacity: 0.9;
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const MenuNavLink = styled(NavLink)`
  width: 100%;
  text-align: center;
  color: #ffffff;
  text-decoration: none;
  padding: 1.2rem 1rem;
  font-family: "Avenir", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    sans-serif;
  font-size: 0.95rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: none;
  }

  &.active {
    color: #ffffff;
    font-weight: 500;
    background-color: rgba(255, 255, 255, 0.05);
  }

  &:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.08);
    transform: translateX(4px);
  }
`;
