import { combineReducers } from 'redux';

import { IRootState } from '../store';

import { TodosReducer } from './todos';
import { UsersReducer } from './users';

export const rootReducer = combineReducers<IRootState>({
    todos: TodosReducer,
    users: UsersReducer,
});
