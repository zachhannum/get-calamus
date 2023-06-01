import styled from "styled-components";
import Color from "color";

type ButtonProps = React.ComponentPropsWithRef<'a'>;

const StyledButton = styled.a`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${(p) => p.theme.fg};
  background-color: ${(p) => Color(p.theme.fg).alpha(0.3).hsl().toString()};
  font-size: 0.7em;
  font-weight: 700;
  padding: 10px 15px;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    background-color: ${(p) => Color(p.theme.bg).alpha(0.3).hsl().toString()};
  } 
  transition: all 200ms ease-in-out;
`;

const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

export default Button;
