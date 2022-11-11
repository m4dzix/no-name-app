import styled from "styled-components";
import woodenHouse from "../../Assets/wooden_houses.jpg";

export const WoodenHouseImage = styled.div`
  max-width: 100%;
  height: 60vh;
  z-index: -1;
  background-image: url(${woodenHouse});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
