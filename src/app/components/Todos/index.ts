import { useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import { View } from './view';
import { IModel, IStateProps } from './model';
import { IRootState } from '../../../store/store';
import { ITodo } from '../../shared/models/Todos';
import { IFilterData } from './Filter/model';
import { filterStatusOptions } from '../../shared/constants/dictionaries';

export const Todos = () => {
    const [pageSize, setPageSize] = useState<number>(10);
    const [paginationPageCount, setPaginationPageCount] = useState<number>(1);
    const [filterParams, setFilterParams] = useState<IFilterData>({
        status: 'none',
        title: ''
    });
    const stateModel = useSelector<IRootState, IModel>(state => ({
        todos: state.todos.items,
        users: state.users.items,
        todoFetch: state.todos.loading,
    }));

    const paginate = (todos: ITodo[], pageSize: number, pageCount: number) => {
        return todos.slice((pageCount - 1) * pageSize, pageCount * pageSize);
    }

    const filterByTitle = (array: ITodo[], title: string) => {
        return array.filter((o: any) => {
            return Object.keys(o).some((k: any) => {
                if (typeof o[k] === 'string') {
                    return o[k].toLowerCase().includes(title.toLowerCase());
                }
            });
        });
    }

    const sortByStatus = (array: ITodo[], sortBy: string) => {
        return array.filter(array => {
            const condition = sortBy === filterStatusOptions.completed ? true : false;

            return array.completed === condition;
        });
    }

    const filter = (purpose: string) => {
        let stateModelStaged = stateModel.todos;

        if (filterParams && filterParams.status === filterStatusOptions.none) {
            stateModelStaged = stateModel.todos;
        } else {
            stateModelStaged = sortByStatus(stateModel.todos, filterParams.status);
        }

        stateModelStaged = filterByTitle(stateModelStaged, filterParams.title);

        // I've shouldn't do this, but it's fast soluton :)
        // maybe I could done it with react router.
        document.title = stateModelStaged.length;

        if (purpose === 'filterRes') {
            return paginate(stateModelStaged, pageSize, paginationPageCount);
        } else {
            return Math.floor(+stateModelStaged.length / pageSize);
        }
    }

    const getExecutantByUserId = (userId: number): {name: string, id: number} => {
        const usersLength = stateModel.users.length;
        const users = stateModel.users;

        if (users && usersLength) {
            for (let i = 0; i <= usersLength - 1; i++) {
                if (users && users[i].id === userId) {
                    return {name: users[i].name, id: users[i].id};
                }
            }
        }

        return {name: 'unnamed', id: -1};
    }

    const onFilterChange = (filter: IFilterData) => {
        setFilterParams(filter);
    }

    const props: IStateProps = {
        ...stateModel,
        todos: filter('filterRes'),
        paginationPage: paginationPageCount,
        // total count per page
        paginationTotalCount: +filter('totalCount'),
        handlePaginationChange: (event: ChangeEvent<any>, value: number) => { setPaginationPageCount(value) },
        getExecutant: (userId) => getExecutantByUserId(userId),
        handleFilterChange: (filter) => onFilterChange(filter)
    }

    return View(props);
};
