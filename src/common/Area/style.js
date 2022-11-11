import styled from "styled-components";
import seaImg from "../../Assets/background1.jpeg";

export const ImageBG = styled.div`
  padding: 50px;
  max-width: 100%;
  height: 80vh;
  z-index: -1;
  display: grid;
  grid-template-columns: 5fr 4fr;
  text-align: center;
  justify-content: center;
  position: relative;
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
`;
