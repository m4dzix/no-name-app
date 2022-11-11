import styled, { css } from "styled-components";
import seaImg from "../../Assets/background1.jpeg";

export const StyledContainer = styled.div`
  padding: 50px;
  max-width: 100%;
  height: 50vh;
  z-index: -1;
  display: grid;
  grid-template-columns: 5fr 4fr;
  text-align: center;
  justify-content: center;
  background-color: whitesmoke;
  ${({ reverse }) =>
    reverse &&
    css`
      grid-auto-flow: dense;
      direction: rtl;
    `}
  ${({ background }) =>
    background &&
    css`
      position: relative;
      height: 80vh;
      &:before {
        content: "";
        background-image: url(${seaImg});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.25;
      }
    `}
`;
