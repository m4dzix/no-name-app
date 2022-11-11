import { StyledContainer } from "./style.js";

const Container = ({ children, background, reverse }) => (
  <StyledContainer background={background} reverse={reverse}>
    {children}
  </StyledContainer>
);

export default Container;
