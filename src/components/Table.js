import styled from 'styled-components';

const Table = styled.table`
  border-spacing: 0;
  width: 100%;
  border-radius: 1em;
  overflow: hidden;
  table-layout: fixed;
`;

const Row = styled.tr`
  color: ${(props) =>
    props.active ? props.theme.primaryColor : ' rgba(0, 0, 0, 0.85)'};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

const Head = styled.thead`
  background-color: ${(props) => props.theme.primaryColor};
  padding: 100px 10px;
  border-radius: 10px;

  ${Row} {
    color: #fff;
  }
`;

const Body = styled.tbody`
  ${Row} {
    cursor: pointer;

    :nth-child(even) {
      background: #f3fbff;
    }

    :hover {
      background-color: #eaf0f2;
    }
  }
`;

const Cell = styled.td`
  padding: 20px 12px;
`;

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Cell = Cell;

export default Table;
