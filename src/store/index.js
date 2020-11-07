import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import axios from 'axios';
import usersReducer from './usersReducer';
import todosReducer from './todosReducer';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

const customizedMiddleware = getDefaultMiddleware({
  thunk: {
    extraArgument: { api },
  },
});

const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer,
  },
  middleware: customizedMiddleware,
});

export default store;
