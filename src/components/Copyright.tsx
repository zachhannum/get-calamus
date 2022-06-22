import styled from "styled-components";

const StyledCopyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.fgSecondary};
  width: 100vw;
  padding: 10px;
  box-sizing: border-box;
  font-size: 0.9em;
`;

const Copyright = () => {
  return (
    <StyledCopyright>
      © Copyright 2022 Zach Hannum, All rights reserved.
    </StyledCopyright>
  );
};

export default Copyright;
