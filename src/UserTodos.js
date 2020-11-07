import { useState, useMemo, memo } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { PlusOutlined, CheckOutlined } from '@ant-design/icons';

import { Modal, List, Button, Badge, Input, Spinner } from './components';
import { markAsDone, createTodo } from './store/thunk';

const ModalWrapper = styled.div`
  position: absolute;
  right: 0;
  width: 40%;
  height: 100%;
`;

const TodoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    width: 50%;
  }
`;

const ListTitle = styled.div`
  color: ${(props) => props.theme.primaryColor};
  height: 10%;
`;

const ListContent = styled.div`
  height: 90%;
  overflow: auto;
`;

const Description = styled.div`
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function UserTodos({ onClose, user }) {
  const [addingMode, setAddingMode] = useState(false);
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  async function handleSubmit() {
    if (!description) {
      return;
    }

    await dispatch(createTodo({ userId: user.id, description }));
    setDescription('');
    setAddingMode(false);
  }

  const activeUserTodos = useMemo(() => {
    if (!user || !user.todos) {
      return [];
    }

    return [...user.todos].reverse().sort((a, b) => {
      const { entities } = todos;
      return entities[a].completed - entities[b].completed;
    });
  }, [user, todos]);

  return (
    <ModalWrapper>
      <Modal
        header={
          addingMode ? (
            <Input
              autoFocus
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              onPressEnter={handleSubmit}
              postfix={
                <Button
                  icon={<CheckOutlined />}
                  onClick={handleSubmit}
                  disabled={!description}
                  loading={todos.createLoading}
                />
              }
            />
          ) : (
            <Button
              icon={<PlusOutlined />}
              onClick={() => setAddingMode(true)}
            />
          )
        }
        onClose={onClose}
      >
        <List>
          <ListTitle>Todo-list for {user.name}</ListTitle>
          <ListContent>
            {todos.fetchLoading ? (
              <Spinner />
            ) : !activeUserTodos.length ? (
              'No todos yet'
            ) : (
              activeUserTodos.map((todoId) => {
                const { completed, description } = todos.entities[todoId];

                return (
                  <List.Item key={todoId}>
                    <TodoWrapper>
                      <div>
                        <Badge completed={completed}>
                          {completed ? 'Completed' : 'Pending'}
                        </Badge>
                        <Description>{description}</Description>
                      </div>
                      <Button
                        disabled={completed}
                        loading={todos.markAsDoneLoadings[todoId]}
                        onClick={() => dispatch(markAsDone({ todoId }))}
                      >
                        {completed ? 'Completed' : 'Mark as done'}
                      </Button>
                    </TodoWrapper>
                  </List.Item>
                );
              })
            )}
          </ListContent>
        </List>
      </Modal>
    </ModalWrapper>
  );
}

export default memo(UserTodos);
