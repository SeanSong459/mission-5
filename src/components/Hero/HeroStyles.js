import styled from "styled-components";
// import HeroImg from "../../assets/hero2.jpg";
import HeroImg from "../../assets/hero2.jpg";

export const HeroContainer = styled.div`
  /* margin-top: 42px; */
  width: 100%;
  height: 650px;
  background-image: url(${HeroImg});
  background-position: 50% 30%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
`;
