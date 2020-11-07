import styled from 'styled-components';
import { LoadingOutlined } from '@ant-design/icons';

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.primaryColor};
  color: #fff;
  outline: 0;
  border: 0;
  border-radius: ${(props) => props.theme.borderRadiusBase};
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 6px;
  transition: 0.2s;

  ${(props) =>
    (props.disabled || props.loading) &&
    `
  cursor: not-allowed;
  background-color: #b5b3b3;
  `}
`;

function Button(props) {
  return (
    <StyledButton {...props}>
      {props.children} {props.loading ? <LoadingOutlined /> : props.icon}
    </StyledButton>
  );
}

export default Button;
