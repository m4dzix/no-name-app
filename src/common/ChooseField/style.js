import styled, { css } from "styled-components";
import { KeyboardArrowDown } from "@styled-icons/material-outlined";
import { Plus, Minus } from "@styled-icons/feather";

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
  position: relative;
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
  cursor: pointer;
`;
export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  background-color: #00a4aa;
  border: 1px solid #00a4aa;
  border-radius: 4px;
  font-size: 18px;
  text-shadow: 0.5px 0.5px black;
  text-transform: uppercase;
  ${({ datePickerButton }) =>
    datePickerButton &&
    css`
      padding: 5px 15px;
      font-size: 18px;
      font-weight: 400;
    `}
`;

export const Popup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 100%;
  right: 0%;
  z-index: 5;
  padding: 15px 10px;
  border-radius: 5px;
  margin-left: -105px;
  margin-bottom: 12px;
  background: #fff;
  color: #242424;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  box-shadow: 0 5px 8px rgb(0 0 0 / 16%);
  ${({ activeClass }) =>
    activeClass &&
    css`
      opacity: 1;
      visibility: visible;
    `}
  &::after {
    content: "";
    position: absolute;
    bottom: 13px;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: white;
    border-bottom: 0;
    margin-left: -20px;
    margin-bottom: -20px;
  }
`;
export const Number = styled.p`
  margin-right: 8px;
`;
export const CounterButton = styled.button`
  margin-left: 8px;
  background-color: #00a4aa;
  color: white;
  border: 1px solid white;
  padding: 5px;
`;

export const StyledCounter = css`
  width: 20px;
  height: 20px;
  color: white;
`;
export const StyledPlus = styled(Plus)`
  ${StyledCounter}
`;
export const StyledMinus = styled(Minus)`
  ${StyledCounter}
`;
export const DatePickerWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;
