import styled from 'styled-components';
import { CheckOutlined, ClockCircleOutlined } from '@ant-design/icons';

const BadgeWrapper = styled.span`
  background-color: ${(props) => (props.completed ? '#01BC90' : '#FC9700')};
  color: #fff;
  border-radius: ${(props) => props.theme.borderRadiusBase};
  padding: 2px 10px;
  font-size: 12px;
  user-select: none;
  display: inline-block;
`;

const IconWrapper = styled.span`
  font-size: 10px;
  margin-right: 8px;
`;

function Badge({ completed, children }) {
  return (
    <BadgeWrapper completed={completed}>
      <IconWrapper>
        {completed ? <CheckOutlined /> : <ClockCircleOutlined />}
      </IconWrapper>
      {children}
    </BadgeWrapper>
  );
}

export default Badge;
