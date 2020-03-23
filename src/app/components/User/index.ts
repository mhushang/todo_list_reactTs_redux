import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { View } from './view';
import { IModel, IStateProps } from './model';
import { IRootState } from '../../../store/store';

import { useParams } from "react-router-dom";

export const User = () => {
    const { id } = useParams();

    const stateModel = useSelector<IRootState, IModel>(state => {
        return {
            todos: state.todos.items,
            users: state.users.items
        }
    });

    useEffect(() => {
        if(!stateModel.todos) window.location.href = '/';
    }, [stateModel.todos])

    const props: IStateProps = {
        ...stateModel,
        user: id && stateModel.users.find(user => user.id === +id),
        userTodos: id && stateModel.todos.filter(todo => todo.userId === +id),
    }

    return View(props);
};
