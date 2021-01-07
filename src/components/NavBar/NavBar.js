import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
} from "./NavBar.styles";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  
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
          <NavItem>
            <NavLinks to="/littleones" onClick={closeMobileMenu}>
              LittleOnes Oyunları
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/trtcocuk" onClick={closeMobileMenu}>
              Trt Çocuk Oyunları
            </NavLinks>
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
          <NavItem>
            <NavLinks to="/littleones" onClick={closeMobileMenu}>
              LittleOnes
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/trtcocuk" onClick={closeMobileMenu}>
              Trt Çocuk
            </NavLinks>
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
