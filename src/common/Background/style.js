import styled from "styled-components";
import background from "../../Assets/background1.jpeg";

export const Container = styled.div`
  background-image: url(${background});
  max-width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;
