import { IUser } from "../../../shared/models/Users";
import { ITodo } from "../../../shared/models/Todos";
import { FormikProps } from "formik";

export interface IFormData {
    user: number;
    todo: string;
}

export interface IModel {
    users?: IUser[];
    todos?: ITodo[];
}

export interface IActions {
}

export interface IStateProps extends IModel, IActions, FormikProps<any> {
}