import { useEffect } from "react";

import { StyledImage } from "./style.js";
import Aos from "aos";
import "aos/dist/aos.css";

const Image = ({ image, big }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return <StyledImage data-aos="fade-up" big={big} image={image} />;
};
export default Image;
