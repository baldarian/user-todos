import styled from 'styled-components';

const Item = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px 14px;
  box-shadow: 0px 0px 20px -5px #a6e5f5;
`;

const List = styled.div`
  height: 100%;

  ${Item} {
    margin-bottom: 20px;
  }
`;

List.Item = Item;

export default List;
