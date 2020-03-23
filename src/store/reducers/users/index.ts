import { Reducer } from 'redux';
import { IUsersState } from '../../../app/shared/models/Users';
import { UsersAction } from '../../actions/users';
import { ActionTypes } from '../../actions';

export const initialState = {
    items: [],
    loading: false,
    error: null,
};

export const UsersReducer: Reducer<IUsersState, UsersAction> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case ActionTypes.GET_USERS:
            return { ...state, loading: true };
        case ActionTypes.GET_USERS_ERROR:
            return { ...state, loading: false };
        case ActionTypes.GET_USERS_SUCCESS:            
            return { ...state, items: action.payload, loading: false };
        default:
            return state;
    }
};
