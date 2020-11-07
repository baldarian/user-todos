import styled from 'styled-components';
import { CloseOutlined } from '@ant-design/icons';

const Wrapper = styled.div`
  background-color: rgba(231, 246, 254, 0.8);
  width: 100%;
  height: 100%;
  border-radius: 1em;
  backdrop-filter: blur(10px);
  padding-top: 80px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`;

const CloseButton = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.primaryColor};
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  padding-left: 16px;
  padding-right: 16px;
  left: 0;
  top: 10px;
  width: 100%;
  box-sizing: border-box;
`;

function Modal({ onClose, children, header }) {
  return (
    <Wrapper>
      <Header>
        <div style={{ width: '80%' }}>{header}</div>
        <div>
          <CloseButton onClick={onClose}>
            <CloseOutlined />
          </CloseButton>
        </div>
      </Header>
      {children}
    </Wrapper>
  );
}

export default Modal;
