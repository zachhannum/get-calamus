import styled from "styled-components";
import { Github } from "@styled-icons/bootstrap/Github";
import Color from "color";
import logo from "../assets/logo.png";

const GithubIcon = styled(Github)`
  color: ${(p) => p.theme.fg};
  height: 30px;
  &:hover {
    color: ${(p) => Color(p.theme.fg).darken(0.2).hsl().toString()};
    transform: scale(1.1);
  }
  transition: all 200ms ease-in-out;
`;

const StyledLogoImg = styled.img`
  height: 70px;
  width: 70px;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.4));
`;

const StyledAppHeader = styled.div`
  display: flex;
  font-weight: 600;
  color: ${(p) => p.theme.fg};
  justify-content: space-between;
  box-sizing: border-box;
  padding: 4vh 10vw 0px 10vw;
`;

const StyledAppHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  gap: 30px;
`;

const StyledAppName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8em;
  user-select: none;
  text-align: center;
`;

const AppHeader = () => {
  return (
    <StyledAppHeader>
      <StyledAppHeaderContainer>
        <StyledLogoImg src={logo} alt="logo" />
        <StyledAppName>calamus</StyledAppName>
      </StyledAppHeaderContainer>
      <StyledAppHeaderContainer>
        <a
          href="https://github.com/midnightprioriem/calamus"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon />
        </a>
      </StyledAppHeaderContainer>
    </StyledAppHeader>
  );
};

export default AppHeader;
