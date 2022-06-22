import styled, { ThemeProvider } from "styled-components";
import theme from "./theme/theme";
import { AppHeader, AppHero, AppDownload, Copyright } from "./components";

const StyledApp = styled.div`
  background-color: ${(p) => p.theme.bg};
  font-family: "Poppins";
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: center;
  gap: 25px;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <StyledContent>
          <AppHeader />
          <AppHero />
          <AppDownload />
        </StyledContent>
        <Copyright />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
