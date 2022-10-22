import { useRef } from "react";
import styled from "styled-components";
import appHeroImg from "../assets/app_hero.png";

const HeroImage = styled.img`
  z-index: 2;
  max-width: 90%;
  max-height: 50vh;
  padding: 20px 5%;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.5));
`;

const AppHero = () => {
  return <HeroImage src={appHeroImg} alt="app" />;
};

export default AppHero;
