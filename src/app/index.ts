import { useDispatch } from 'react-redux';
import { getTodos } from '../store/actions/todos';
import { View } from './view';

export const App = () => {
    const dispatch = useDispatch();

    // collect initial data to store
    dispatch(getTodos());

    return View()
}
