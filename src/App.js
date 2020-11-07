import { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './store/thunk';
import { Table, Spinner } from './components';
import UserTodos from './UserTodos';

const { Head, Body, Row, Cell } = Table;

const Wrapper = styled.div`
  width: 60%;
  min-width: 800px;
  height: 70vh;
  margin: auto;
  margin-top: 100px;
  overflow: auto;
  position: relative;
`;

function App() {
  const [activeUserId, setActiveUserId] = useState(null);

  const users = useSelector((state) => state.users);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const activeUser = users.entities[activeUserId];

  useLayoutEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Wrapper>
      {activeUser && (
        <UserTodos user={activeUser} onClose={() => setActiveUserId(null)} />
      )}

      {users.loading ? (
        <Spinner />
      ) : (
        <Table>
          <Head>
            <Row>
              <Cell>Name</Cell>
              <Cell>Completion Rate %</Cell>
            </Row>
          </Head>

          <Body>
            {Object.values(users.entities).map(
              ({ id, name, todos: userTodos }) => {
                const rate = Math.round(
                  (userTodos.filter((curr) => todos.entities[curr].completed)
                    .length /
                    userTodos.length) *
                    100
                );

                return (
                  <Row
                    active={id === activeUserId}
                    key={id}
                    onClick={() => setActiveUserId(id)}
                  >
                    <Cell>{name}</Cell>
                    <Cell>{Number.isInteger(rate) ? rate : '-'}</Cell>
                  </Row>
                );
              }
            )}
          </Body>
        </Table>
      )}
    </Wrapper>
  );
}

export default App;
