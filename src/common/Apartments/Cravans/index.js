import Container from "../../Container";
import Image from "../../Image";
import image from "../../../Assets/background1.jpeg";
import Description from "../../Description";

const Caravans = () => (
  <Container reverse>
    <Image image={image} />
    <Description
      text={
        "This example shows how all props of the Input component are passed on to the DOM node that is mounted, as with React elements."
      }
    />
  </Container>
);

export default Caravans;
