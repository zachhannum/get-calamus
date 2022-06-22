import styled from "styled-components";
import Color from "color";

type ButtonProps = React.ComponentPropsWithRef<'a'>;

const StyledButton = styled.a`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
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

const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

export default Button;
