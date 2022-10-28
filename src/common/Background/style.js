import styled from "styled-components";
import background from "../../Assets/background2.jpeg";

export const Container = styled.div`
  background-image: url(${background});
  max-width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  text-align: center;
  @media (max-width: 750px) {
    height: 50vh;
  }
`;
export const Image = styled.img`
  @media (max-width: 750px) {
    display: none;
  }
`;
