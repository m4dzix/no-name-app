import styled from "styled-components";
import { Menu } from "@styled-icons/boxicons-regular";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
`;
export const Logo = styled.img`
  max-width: 192px;
  height: 36px;
`;
export const List = styled.ul`
  list-style: none;
  font-family: "PT Sans Narrow", sans-serif;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.05em;
`;
export const Item = styled.li`
  font-size: 13px;
  padding-right: 10px;
`;
export const Button = styled.li`
  border: 0.5px solid black;
  padding: 5px 35px;
  background-color: transparent;
`;
export const MenuIcon = styled(Menu)`
  width: 30px;
`;
