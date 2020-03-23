import { ITodo } from "../../../shared/models/Todos";


export interface IModel {
    todo: ITodo;
    executant: {name: string, id: number};
    index: number;
}

export interface IActions {
    handleTodoStatusChange: (status: boolean, todoId: number) => void;
    handleDeleteTodo: (todoId: number) => void;
    handleEdit: (rowIndex: number) => void;
    handleCancelEdit: () => void;
    handleConfirmEdit: (todoId: number) => void;
    handleTodoTitleChange: (todoTitle: string) => void;
}

export interface IStateProps extends IModel, IActions {
    rowEditId: number;
    title: string;
}