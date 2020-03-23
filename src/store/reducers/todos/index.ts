import { Reducer } from 'redux';
import { ITodosState, ITodo } from '../../../app/shared/models/Todos';
import { TodosAction } from '../../actions/todos';
import { ActionTypes } from '../../actions';

export const initialState = {
    items: [],
    loading: false,
    error: null,
};

export const TodosReducer: Reducer<ITodosState, TodosAction> = (
    state = initialState,
    action,
) => {
    switch (action.type) {
        case ActionTypes.GET_TODOS:
            return { ...state, loading: true };
        case ActionTypes.GET_TODOS_ERROR:
            return { ...state, loading: false };
        case ActionTypes.GET_TODOS_SUCCESS:            
            return { ...state, items: action.payload, loading: false };
        case ActionTypes.ADD_TODO:
            const payload = action.payload;
            const newTodo: ITodo = {
                id: payload.todoId,
                title: payload.todoTitle,
                userId: payload.userId,
                completed: false
            };
            return { ...state, items: [newTodo, ...state.items], loading: false };
        case ActionTypes.CHANGE_TODO_STATUS:
            if (state.items && state.items.length) {
                const itemsLength = state.items.length;
                for (let i=0; i <= itemsLength-1; i++) {
                    if (state.items[i].id === action.payload.todoId) {
                        state.items[i].completed = action.payload.status;
                    }
                }
            }
            return { ...state, items: state.items, loading: false };
        case ActionTypes.DELETE_TODO:
            if (state.items && state.items.length) {                
                const itemsLength = state.items.length;
                for (let i=0; i <= itemsLength-1; i++) {
                    if (state.items[i].id === action.payload.todoId) {
                        state.items.splice(i, 1);
                        return state;
                    }
                }
            }
            return { ...state, items: state.items, loading: false };
        case ActionTypes.CHANGE_TODO_TITLE:
            if (state.items && state.items.length) {                
                const itemsLength = state.items.length;
                for (let i=0; i <= itemsLength-1; i++) {
                    if (state.items[i].id === action.payload.todoId) {
                        state.items[i].title = action.payload.todoTitle;
                    }
                }
            }
            return { ...state, items: state.items, loading: false };
        default:
            return state;
    }
};
