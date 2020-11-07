import { schema } from 'normalizr';

const todo = new schema.Entity('todos');

const user = new schema.Entity('users', {
  todos: [todo],
});

export { user };
