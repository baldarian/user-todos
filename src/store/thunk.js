import { createAsyncThunk } from '@reduxjs/toolkit';
import { normalize } from 'normalizr';
import { user } from './schema';

export const createTodo = createAsyncThunk(
  'todos/createTodo',
  async ({ description, userId }, { extra: { api } }) => {
    const { data } = await api.post('/todos', {
      description,
      userId,
      completed: false,
    });

    return data;
  }
);

export const markAsDone = createAsyncThunk(
  'todos/markAsDone',
  async ({ todoId }, { extra: { api } }) => {
    const { data } = await api.patch(`/todos/${todoId}`, { completed: true });

    return data;
  }
);

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (_, { extra: { api } }) => {
    const { data } = await api.get('/users?_embed=todos');

    return normalize(data, [user]).entities;
  }
);
