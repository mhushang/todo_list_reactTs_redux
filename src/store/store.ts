import { createStore, applyMiddleware } from 'redux';
import reduxThunk, { ThunkMiddleware } from 'redux-thunk';

import { RootActions } from './actions';
import { rootReducer } from './reducers';
import { ITodosState } from '../app/shared/models/Todos';
import { IUsersState } from '../app/shared/models/Users';

export interface IRootState {
  readonly todos: ITodosState;
  readonly users: IUsersState;
}

export const store = createStore(
    rootReducer,
    applyMiddleware(
        reduxThunk as ThunkMiddleware<IRootState, RootActions>
    ),
);
