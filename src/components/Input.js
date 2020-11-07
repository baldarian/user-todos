import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Postfix = styled.div`
  margin-left: -20px;
`;

const StyledInput = styled.input`
  border: 0;
  outline: 0;
  text-indent: 10px;
  border-radius: ${(props) => props.theme.borderRadiusBase};
  height: 30px;
  width: 100%;
  padding-right: 30px;
`;

function Input({ postfix, onPressEnter, ...props }) {
  function handleKeyDown(e) {
    if (e.key === 'Enter' && onPressEnter) {
      onPressEnter();
    }
  }

  return (
    <Wrapper>
      <StyledInput {...props} onKeyDown={handleKeyDown} />
      <Postfix>{postfix}</Postfix>
    </Wrapper>
  );
}

export default Input;
