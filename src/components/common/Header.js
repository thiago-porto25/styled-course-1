import { useContext, useState } from 'react';

import styled, { ThemeContext } from 'styled-components';

import { NavLink } from 'react-router-dom';
import { Toggle } from '.';

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: sticky;
  top: 0;
  background-image: linear-gradient(
    to right,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
`;

const Menu = styled.nav`
  display: ${(p) => (p.open ? 'block' : 'none')};
  font-family: 'Open Sans';
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  padding: 8px;
  box-sizing: border-box;
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
  background: ${(p) => p.theme.bodyBgColor};

  @media only screen and (min-width: 768px) {
    display: flex;
    position: relative;
    width: initial;
    left: initial;
    top: initial;
    margin: auto 0 auto auto;
    border-bottom: none;
    background: transparent;
  }
`;

const Link = styled(NavLink)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: 0 auto;
  color: ${(p) => p.theme.bodyFontColor};

  &.active {
    font-weight: bold;
  }
`;

const MobileMenuIcon = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  cursor: pointer;

  > div {
    height: 3px;
    background-color: ${(p) => p.theme.bodyFontColor};
    margin: 5px 0;
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { id, setTheme } = useContext(ThemeContext);

  const resolveActive = (isActive) => {
    return isActive ? 'active' : '';
  };

  return (
    <HeaderWrapper>
      <MobileMenuIcon onClick={() => setMenuOpen((current) => !current)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
        <Link to="/" className={(isActive) => resolveActive(isActive)}>
          Home
        </Link>
        <Link to="/login" className={(isActive) => resolveActive(isActive)}>
          Login
        </Link>
        <Toggle isActive={id === 'dark'} onToggle={setTheme} />
      </Menu>
    </HeaderWrapper>
  );
}
