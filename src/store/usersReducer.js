import { createReducer } from '@reduxjs/toolkit';
import { createTodo, fetchUsers } from './thunk';

const usersReducer = createReducer(
  { entities: {}, loading: false },
  {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = action.payload.users;
    },
    [createTodo.fulfilled]: (state, action) => {
      const { userId, id } = action.payload;

      state.entities[userId].todos.push(id);
      state.createLoading = false;
    },
  }
);

export default usersReducer;
