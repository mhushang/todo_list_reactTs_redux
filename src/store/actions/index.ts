import { TodosAction } from './todos';
import { UsersAction } from './users';

export enum ActionTypes {
  // Todos Action Types
  GET_TODOS = '@@IB/GET_TODOS',
  GET_TODOS_ERROR = '@@IB/GET_TODOS_ERROR',
  GET_TODOS_SUCCESS = '@@IB/GET_TODOS_SUCCESS',
  ADD_TODO = '@@IB/ADD_TODO',
  CHANGE_TODO_STATUS = '@@IB/CHANGE_TODO_STATUS',
  DELETE_TODO = '@@IB/DELETE_TODO',
  CHANGE_TODO_TITLE = '@@IB/CHANGE_TODO_TITLE',

  // Users Action Types
  GET_USERS = '@@IB/GET_USERS',
  GET_USERS_ERROR = '@@IB/GET_USERS_ERROR',
  GET_USERS_SUCCESS = '@@IB/GET_USERS_SUCCESS',
}

export type RootActions =
  | TodosAction
  | UsersAction;
