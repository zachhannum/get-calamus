import styled, { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import Color from "color";
import { AppHeader, AppHero, AppDownload, Copyright } from "./components";

const StyledApp = styled.div`
  background-color: ${(p) => p.theme.bg};
  background: linear-gradient(
    -45deg,
    ${(p) => p.theme.bg},
    ${(p) => Color(p.theme.bg).darken(0.4).hsl().toString()}
  );
  font-family: "Poppins";
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
`;

const Hero = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const Tagline = styled.span`
  font-size: 2em;
  color: ${(p) => p.theme.fg};
  padding: 0px 20px;
  box-sizing: border-box;
  text-align: center;
`;

const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <AppContent>
          <AppHeader />
          <Tagline>
            <strong>Write</strong> and <strong>Publish</strong> novels with
            ease.
          </Tagline>
          <Hero>
            <AppHero />
            <AppDownload />
          </Hero>
        </AppContent>
        <Copyright />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
