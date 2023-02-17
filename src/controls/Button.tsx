import styled from "styled-components";

type ButtonProps = React.ComponentPropsWithRef<'a'>;

const StyledButton = styled.a`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: ${(p) => p.theme.bg};
  background-color: ${(p) => p.theme.fg};
  font-size: 0.7em;
  font-weight: 700;
  padding: 10px 15px;
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    color: ${(p) => p.theme.fg};
    background-color: ${(p) => p.theme.bg};
  }
  transition: all 200ms ease-in-out;
`;

const Button = (props: ButtonProps) => {
  return <StyledButton {...props} />;
};

export default Button;
