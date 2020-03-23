import { ITodo } from "../../shared/models/Todos";
import { IUser } from "../../shared/models/Users";

export interface IModel {
    todos: ITodo[];
    users: IUser[];
}

export interface IActions {
}

export interface IStateProps extends IModel, IActions {
    user: IUser | any;
    userTodos: ITodo[] | any;
}