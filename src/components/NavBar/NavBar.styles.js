import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaCaretDown,FaTimes } from "react-icons/fa";

export const NavBarContainer = styled.nav`
    background: beige;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`;

export const NavBarLogo = styled.img`
    width: 200px;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 2px;
  /*color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;*/

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 5px;
    left: 5px;
  }
`;

export const MenuIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }
`;

export const NavMenuActive = styled.ul`
/*display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;*/
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction:column;
    width:100%;
    height:90vh;
    top:60px;
    position:absolute;
    //align-items:center;

    background: #242222;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease;
    z-index: 1;
  }
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  height: 80px;

  @media screen and (max-width: 960px) {
    position: relative;
    color:white;
    
  }
`;

export const NavLinks = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;

  :hover {
    background-color: #1888ff;
    border-radius: 4px;
    transition: all 0.2s ease-out;

    @media screen and (max-width: 960px) {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;

      :hover {
        background-color: #1888ff;
        border-radius: 0;
      }
    }
  }
`;

export const Times = styled(FaTimes)`
  @media screen and (max-width: 960px) {
    color: black;
    font-size: 2rem;
  }
`;

export const Bars = styled(FaBars)`
  color: black;
`;

export const CaretDown = styled(FaCaretDown)``;
