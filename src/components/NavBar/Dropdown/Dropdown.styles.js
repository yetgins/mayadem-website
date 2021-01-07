import { Link } from "react-router-dom";
import styled from "styled-components";

export const DropdownMenu = styled.ul`
  background: #1888ff;
  width: 200px;
  position: absolute;
  top: 80px;
  list-style: none;
  text-align: start;
`;

export const DropdownMenuClicked = styled.ul`
  display: none;
`;

export const DropdownList = styled.li`
  background: #1888ff;
  cursor: pointer;

  :hover {
    background: #5cabff;
  }
`;

export const DropdownLink = styled(Link)`
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
  color: #fff;
  padding: 16px;
`;
