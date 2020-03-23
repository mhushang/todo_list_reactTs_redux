import { ITodo } from "../../shared/models/Todos";
import { ChangeEvent } from 'react';
import { IUser } from "../../shared/models/Users";
import { IFilterData } from "./Filter/model";

export interface IModel {
    todos: ITodo[] | any,
    users: IUser[],
    todoFetch: boolean,
}

export interface IActions {
    handlePaginationChange: (event: ChangeEvent<any>, value: number) => void;
    getExecutant: (userId: number) => {name: string, id: number};
    handleFilterChange: (filter: IFilterData) => void;
}

export interface IStateProps extends IModel, IActions {
    paginationTotalCount: number;
    paginationPage: number;
}