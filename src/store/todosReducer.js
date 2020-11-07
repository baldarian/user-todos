import { createReducer } from '@reduxjs/toolkit';
import { fetchUsers, createTodo, markAsDone } from './thunk';

const todosReducer = createReducer(
  {
    fetchLoading: false,
    createLoading: false,
    markAsDoneLoadings: {},
    entities: {},
  },
  {
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.entities = action.payload.todos || {};
    },
    [markAsDone.pending]: (state, action) => {
      const { todoId } = action.meta.arg;
      state.markAsDoneLoadings[todoId] = true;
    },
    [markAsDone.fulfilled]: (state, action) => {
      const { todoId } = action.meta.arg;

      state.entities[todoId] = action.payload;
      state.markAsDoneLoadings[todoId] = false;
    },
    [createTodo.pending]: (state) => {
      state.createLoading = true;
    },
    [createTodo.fulfilled]: (state, action) => {
      state.entities[action.payload.id] = action.payload;
      state.createLoading = false;
    },
  }
);

export default todosReducer;
