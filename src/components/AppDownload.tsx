import styled from "styled-components";
import { Button } from "../controls";

const StyledAppDownload = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(p) => p.theme.fg};
  font-size: 1.5em;
  align-items: center;
  gap: 20px;
  padding: 30px;
`;

const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
`;

const AppDownload = () => {
  return (
    <StyledAppDownload>
      <span>
        Download for <strong>free</strong>
      </span>
      <StyledButtons>
        <Button>Windows</Button>
        <Button>macOS Silicon</Button>
        <Button>macOS Intel</Button>
      </StyledButtons>
    </StyledAppDownload>
  );
};

export default AppDownload;
