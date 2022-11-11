import styled, { css } from "styled-components";

export const StyledImage = styled.div`
  background-image: url(${(props) => props.image});
  height: 50vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  ${({ big }) =>
    big &&
    css`
      height: 80vh;
    `}
`;
