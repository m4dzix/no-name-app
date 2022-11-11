import { useEffect } from "react";
import { Text } from "./styled.js";
import Aos from "aos";
import "aos/dist/aos.css";

const Description = ({ text }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return <Text data-aos="fade">${text}</Text>;
};

export default Description;
