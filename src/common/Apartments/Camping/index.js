import Container from "../../Container";
import Image from "../../Image";
import image from "../../../Assets/sea.jpeg";
import Description from "../../Description";

const Camping = () => (
  <Container>
    <Image image={image} />
    <Description
      text={
        "This example shows how all props of the Input component are passed on to the DOM node that is mounted, as with React elements."
      }
    />
  </Container>
);

export default Camping;
