import styled from "styled-components";
import Color from "color";

type ButtonProps = {
  children: React.ReactNode;
};

const StyledButton = styled.button`
  all: unset;
  background-color: ${(p) => p.theme.primary};
  font-size: 0.7em;
  font-weight: 700;
  padding: 10px 15px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0px 5px 10px
    ${(p) => Color(p.theme.primaryShadow).alpha(0.7).hsl().toString()};
  &:hover {
    box-shadow: 0px 10px 20px
      ${(p) => Color(p.theme.primaryShadow).alpha(0.7).hsl().toString()};
    transform: scale(1.05) translate(0px, -3px);
  }
  transition: all 200ms ease-in-out;
`;

const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
