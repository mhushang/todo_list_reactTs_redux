import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootActions } from "..";
import { IRootState } from "../../store";
import { ITodo } from "../../../app/shared/models/Todos";
import { ActionTypes } from "..";
import { AxiosResponse } from "axios";
import { ApiRoutes } from "../../../app/shared/ApiRoutes";
import axios from "../../../app/shared/axios";

import { getUsers } from '../users'

export type ThunkResult<R> = ThunkAction<R, IRootState, undefined, RootActions>;

interface IGetTodos {
  type: ActionTypes.GET_TODOS;
}

interface IGetTodosError {
  type: ActionTypes.GET_TODOS_ERROR;
}

interface IGetTodosSuccess {
  type: ActionTypes.GET_TODOS_SUCCESS;
  payload: ITodo[];
}

interface IAddTodo {
  type: ActionTypes.ADD_TODO;
  payload: {
    todoTitle: string,
    userId: number,
    todoId: number
  };
}

interface IChangeTodoStatus {
  type: ActionTypes.CHANGE_TODO_STATUS;
  payload: {
    status: boolean,
    todoId: number
  };
}

interface IDeleteTodo {
  type: ActionTypes.DELETE_TODO;
  payload: {
    todoId: number
  };
}

interface IChangeTodoTitle {
  type: ActionTypes.CHANGE_TODO_TITLE;
  payload: {
    todoTitle: string,
    todoId: number
  };
}

export const handleGetTodos = (dispatch: Dispatch<IGetTodos>) => {
  dispatch({
    type: ActionTypes.GET_TODOS
  });
};

export const handleGetTodosSuccess = (
  dispatch: Dispatch<IGetTodosSuccess>,
  response: Array<ITodo>
) => {
  dispatch({
    type: ActionTypes.GET_TODOS_SUCCESS,
    payload: response
  });
};

export const handleGetTodosError = (dispatch: Dispatch<IGetTodosError>) => {
  dispatch({
    type: ActionTypes.GET_TODOS_ERROR
  });
};

export const getTodos = (): ThunkResult<void> => async dispatch => {
  handleGetTodos(dispatch);

  try {
    const response: AxiosResponse<ITodo[]> = await axios.get(ApiRoutes.todos);

    handleGetTodosSuccess(dispatch, response.data);
    dispatch(getUsers());
  } catch (e) {
    handleGetTodosError(dispatch);
  }
};

export const addTodo = (todoTitle: string, userId: number, todoId: number) => {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {todoTitle, userId, todoId}
  }
}

export const changeTodoStatus = (status: boolean, todoId: number) => {  
  return {
    type: ActionTypes.CHANGE_TODO_STATUS,
    payload: {status, todoId}
  }
}

export const deleteTodo = (todoId: number) => {  
  return {
    type: ActionTypes.DELETE_TODO,
    payload: {todoId}
  }
}

export const changeTodoTitle = (todoTitle: string, todoId: number) => {  
  return {
    type: ActionTypes.CHANGE_TODO_TITLE,
    payload: {todoTitle, todoId}
  }
}

export type TodosAction = 
  | IGetTodos
  | IGetTodosError
  | IGetTodosSuccess
  | IAddTodo
  | IChangeTodoStatus
  | IDeleteTodo
  | IChangeTodoTitle;
