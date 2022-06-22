import { useRef } from "react";
import styled, { keyframes } from "styled-components";
import appHeroImg from "../assets/app_hero.png";

const StyledAppHero = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: ${(p) => p.theme.fg};
  gap: 30px;
  font-size: 1.5em;
`;

const gradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const StyledGradientRect = styled.div`
  position: absolute;
  top: -10%;
  z-index: 1;
  width: 110%;
  left: -5%;
  aspect-ratio: 2.5;
  box-sizing: border-box;
  background: rgb(69, 154, 195);
  background: linear-gradient(-45deg, #4d9ec5, #776fde, #59beee);
  background-size: 400% 400%;
  animation: ${gradient} 15s ease infinite;
  border-radius: 10px;
  box-shadow: 0px 10px 20px 20px rgba(0, 0, 0, 0.1);
`;

const HeroImage = styled.img`
  z-index: 2;
  max-width: 100%;
  max-height: 50vh;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.5));
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
`;

const AppHeroImage = styled.div`
  margin-top: 4vh;
  z-index: 2;
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 85%;
`;

const AppHero = () => {
  const appHeroRef = useRef<HTMLImageElement | null>(null);

  return (
    <StyledAppHero>
      <AppHeroImage>
        <HeroImage src={appHeroImg} alt="app" ref={appHeroRef} />
        <StyledGradientRect />
      </AppHeroImage>
    </StyledAppHero>
  );
};

export default AppHero;
