import styled from "styled-components";
import { KeyboardArrowDown } from "@styled-icons/material-outlined";

export const CheckInBox = styled.div`
  position: absolute;
  width: 65%;
  height: 100px;
  background-color: #0007;
  z-index: 1;
  bottom: 30px;
  border-radius: 5px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
`;
export const Text = styled.p`
  font-family: "Crimson Text", serif;
  font-size: 21px;
  text-transform: capitalize;
  color: white;
  text-shadow: 1px 1px black;
  margin: 0;
`;
export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  padding: 0;
  text-shadow: 0.5px 0.5px black;
`;
export const Item = styled.li`
  list-style: none;
  font-size: 18px;
  color: #eee;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  margin: 0 3px;
  padding-bottom: 3px;
  border-bottom: 2px dotted white;
`;
export const StyledSpan = styled.span`
  font-size: 18px;
  color: white;
  margin: 0 3px;
`;
export const Arrow = styled(KeyboardArrowDown)`
  height: 20px;
  color: white;
  margin: 0 3px;
`;
export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  background-color: #00a4aa;
  border: 1px solid #00a4aa;
  height: 45px;
  font-size: 18px;
  text-shadow: 0.5px 0.5px black;
  text-transform: uppercase;
`;
