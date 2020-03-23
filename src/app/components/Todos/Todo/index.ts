import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { View } from './view';
import { IModel, IStateProps } from './model';
import { changeTodoStatus, deleteTodo, changeTodoTitle } from '../../../../store/actions/todos';

export const Todo = (props: IModel) => {
    const dispatch = useDispatch();
    const [rowId, setRowId] = useState<number>(-1);
    const [title, setTitle] = useState<string>(props.todo.title);

    const onStatusChange = (e: boolean, todoId: number) => {
        dispatch(changeTodoStatus(e, todoId))
    }

    const onDeleteTodo = (todoId: number) => {
        // of course this is only to solve the test task :) 
        // in production projects I will create a dialog component and will reuse it 
        /* eslint-disable */
        const c = confirm("Are you sure you want to delete this todo?");
        if (c === true) {
            dispatch(deleteTodo(todoId));            
        } else {
            return
        }
    }

    const onEditTodo = (index: number) => {
        setRowId(index);
    }

    const onCancelEdit = () => {
        setRowId(-1);
    }

    const onConfirmEdit = (todoId: number) => {
        dispatch(changeTodoTitle(title, todoId));
        setRowId(-1);
    }

    const onTodoTitleChange = (todoTitle: string) => {
        setTitle(todoTitle);
    }

    const stateProps: IStateProps = {
        todo: props.todo,
        executant: props.executant,
        index: props.index,
        rowEditId: rowId,
        title: title,
        handleTodoStatusChange: (e, todoId) => onStatusChange(e, todoId),
        handleDeleteTodo: (todoId) => onDeleteTodo(todoId),
        handleEdit: (index) => onEditTodo(index),
        handleCancelEdit: () => onCancelEdit(),
        handleConfirmEdit: (todoId) => onConfirmEdit(todoId),
        handleTodoTitleChange: (todoTitle) => onTodoTitleChange(todoTitle),
    }

    return View(stateProps);
};
