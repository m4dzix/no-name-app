import { Container } from "./style.js";
import Text from "../../Assets/Tukan_bay.png";
import ChooseField from "../ChooseField";

const Background = () => (
  <>
    <Container>
      <img src={Text} alt="logo" />
    </Container>
    <ChooseField />
  </>
);

export default Background;
