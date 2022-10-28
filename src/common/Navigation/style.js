import styled, { css } from "styled-components";
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

  @media (max-width: 900px) {
    justify-content: center;
  }
  @media (max-width: 750px) {
    height: 100vh;
    background-color: whitesmoke;
    flex-direction: row;
    transition: 1s;
    overflow: scroll;
    ${({ hideNavigation }) =>
      hideNavigation &&
      css`
        opacity: 0;
      `}
  }
`;
export const Logo = styled.img`
  max-width: 192px;
  height: 36px;
  @media (max-width: 900px) {
    display: none;
  }
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
  @media (max-width: 750px) {
    flex-direction: column;
    text-transform: none;
  }
`;
export const Item = styled.li`
  font-size: 13px;
  padding-left: 15px;
  color: white;
  text-shadow: 0.5px 0.5px black;
  @media (max-width: 750px) {
    color: #00a4aa;
    font-size: 18px;
    text-shadow: none;
    padding: 10px;
    letter-spacing: 2px;
  }
`;
export const Button = styled.li`
  border: 0.5px solid white;
  padding: 15px 30px;
  background-color: transparent;
  @media (max-width: 750px) {
    color: #fff;
    background-color: #00a4aa;
    border: 0.5px solid #00a4aa;
  }
`;
export const MenuIcon = styled(Menu)`
  display: none;
  @media (max-width: 750px) {
    position: fixed;
    display: flex;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;
    color: black;
    z-index: 10;
  }
`;
