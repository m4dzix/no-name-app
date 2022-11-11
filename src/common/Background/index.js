import { Container, Image } from "./style.js";
import Text from "../../Assets/tukan_bay.png";
import ChooseField from "../ChooseField";
import { useDispatch } from "react-redux";
import { hideAll } from "../ChooseField/counterSlice";

const Background = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Container
        onClick={() => {
          dispatch(hideAll());
        }}
      >
        <Image src={Text} alt="logo" />
      </Container>
      <ChooseField />
    </>
  );
};

export default Background;
