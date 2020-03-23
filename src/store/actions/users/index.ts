import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootActions } from '..';
import { IRootState } from '../../store';
import { IUser } from '../../../app/shared/models/Users';
import { ActionTypes } from '..';
import { AxiosResponse } from 'axios';
import axios from '../../../app/shared/axios';
import { ApiRoutes } from '../../../app/shared/ApiRoutes';

export type ThunkResult<R> = ThunkAction<R, IRootState, undefined, RootActions>;

interface IGetUsers {
    type: ActionTypes.GET_USERS;
}

interface IGetUsersError {
    type: ActionTypes.GET_USERS_ERROR;
}

interface IGetUsersSuccess {
    type: ActionTypes.GET_USERS_SUCCESS;
    payload: IUser[];
}

export const handleGetUsers = (dispatch: Dispatch<IGetUsers>) => {
    dispatch({
        type: ActionTypes.GET_USERS,
    });
};

export const handleGetUsersError = (
    dispatch: Dispatch<IGetUsersError>,
) => {
    dispatch({
        type: ActionTypes.GET_USERS_ERROR,
    });
};

export const handleGetUsersSuccess = (
    dispatch: Dispatch<IGetUsersSuccess>,
    response: Array<IUser>,
) => {
    dispatch({
        type: ActionTypes.GET_USERS_SUCCESS,
        payload: response,
    });
};

export const getUsers = (): ThunkResult<void> => async dispatch => {
    handleGetUsers(dispatch);

    try {
        const response: AxiosResponse<IUser[]> = await axios.get(
            ApiRoutes.users,
        );

        handleGetUsersSuccess(dispatch, response.data);
    } catch (e) {
        handleGetUsersError(dispatch);
    }
};

export type UsersAction =
    | IGetUsers
    | IGetUsersError
    | IGetUsersSuccess;
