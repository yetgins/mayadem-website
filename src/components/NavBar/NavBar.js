import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import {
  NavBarContainer,
  NavBarLogo,
  MenuIcon,
  Times,
  Bars,
  NavMenu,
  NavMenuActive,
  NavItem,
  NavLinks,
  CaretDown,
} from "./NavBar.styles";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(true);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <NavBarContainer>
      <NavLink to="/">
        <NavBarLogo
          src="https://www.mayadem.com/wp-content/uploads/2016/03/logo.png"
          onClick={closeMobileMenu}
        />
      </NavLink>
      <MenuIcon onClick={handleClick}>{click ? <Times /> : <Bars />} </MenuIcon>
      {click ? (
        <NavMenuActive>
          <NavItem>
            <NavLinks to="/" onClick={closeMobileMenu}>
              Ana Sayfa
            </NavLinks>
          </NavItem>
          <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavLinks to="/oyunlar" onClick={closeMobileMenu}>
              Oyunlar <CaretDown />
            </NavLinks>
            {dropdown && <Dropdown />}
          </NavItem>
          <NavItem>
            <NavLinks to="/hakkimizda" onClick={closeMobileMenu}>
              Hakkımızda
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/iletisim" onClick={closeMobileMenu}>
              İletişim
            </NavLinks>
          </NavItem>
        </NavMenuActive>
      ) : (
        <NavMenu>
          <NavItem>
            <NavLinks to="/" onClick={closeMobileMenu}>
              Ana Sayfa
            </NavLinks>
          </NavItem>
          <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <NavLinks to="/oyunlar" onClick={closeMobileMenu}>
              Oyunlar <CaretDown />
            </NavLinks>
            {dropdown && <Dropdown />}
          </NavItem>
          <NavItem>
            <NavLinks to="/hakkimizda" onClick={closeMobileMenu}>
              Hakkımızda
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/iletisim" onClick={closeMobileMenu}>
              İletişim
            </NavLinks>
          </NavItem>
        </NavMenu>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
