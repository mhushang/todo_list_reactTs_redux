import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { View } from './view';
import { IModel, IFormData } from './model';
import { IRootState } from '../../../../store/store';
import { addTodo } from '../../../../store/actions/todos';

export const AddTodo = () => {
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        todo: Yup.string().required("Title is required"),
        user: Yup.string().required("User is required"),
    });

    const stateModel = useSelector<IRootState, IModel>(state => {
        return {
            todos: state.todos.items,
            users: state.users.items
        }
    });

    const submit = (data: IFormData) => {
        dispatch(addTodo(data.todo, data.user, stateModel.todos!.length + 1));
    };

    const stateProps = {
        ...stateModel,
    }

    const initialFormValues = { todo: '', user: 1 };

    return (
        <Formik
            render={props => <View {...props} {...stateProps} />}
            initialValues={initialFormValues}
            validationSchema={validationSchema}
            onSubmit={(data) => submit(data)} />
    );
};
