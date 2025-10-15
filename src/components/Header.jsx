import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fbede0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1rem 0;
`;

const NavContainer = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

const Logo = styled.h1`
  color: var(--color-burgundy);
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavItem = styled.li``;

const StyledNavLink = styled(NavLink)`
  /* Available links are underlined */
  text-decoration: underline;
  color: var(--color-burgundy);
  font-weight: 500;
  transition: color 0.2s ease, text-decoration 0.2s ease;
  cursor: pointer;

  /* Active link: no decoration */
  &.active {
    color: var(--color-merlot);
    text-decoration: none;
  }

  &:hover {
    color: var(--color-merlot);
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <Logo>BW</Logo>
        <NavLinks>
          <NavItem>
            <StyledNavLink to="/">Home</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/services">Services</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/gallery">Gallery</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          </NavItem>
        </NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
