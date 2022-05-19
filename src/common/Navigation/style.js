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
  width: calc(100vw - 60px);
`;
export const Logo = styled.img`
  max-width: 192px;
  height: 36px;
`;
export const List = styled.ul`
  list-style: none;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
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
  padding-right: 15px;
  color: white;
  text-shadow: 0.5px 0.5px black;
`;
export const Button = styled.li`
  border: 0.5px solid white;
  padding: 15px 30px;
  background-color: transparent;
`;
export const MenuIcon = styled(Menu)`
  width: 30px;
`;
