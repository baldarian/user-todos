import { LoadingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.primaryColor};
  font-size: 30px;
`;

function Spinner() {
  return (
    <Wrapper>
      <LoadingOutlined />
    </Wrapper>
  );
}

export default Spinner;
