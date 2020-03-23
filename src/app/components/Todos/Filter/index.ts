import { useState } from 'react';

import { View } from './view';
import { IModel, IStateProps, IFilterData } from './model';

export const Filter = (props: IModel) => {
    const initialFilterValue = {status: 'none', title: '',};
    const [filterParams, setFilterParams] = useState<IFilterData>(initialFilterValue);

    const onStatusChange = (status: string) => {
        setFilterParams({...filterParams, status});
        props.onFilterChange({...filterParams, status});
    }

    const onTitleChange = (title: string) => {
        setFilterParams({...filterParams, title});
        props.onFilterChange({...filterParams, title});
    }

    const onClearAllFilters = () => {
        setFilterParams(initialFilterValue);
        props.onFilterChange(initialFilterValue);
    }

    const stateProps: IStateProps = {
        onFilterChange: () => {},
        handleStatusChange: (status) => onStatusChange(status),
        handleTitleChange: (title) => onTitleChange(title),
        handleClearAllFilters: () => onClearAllFilters(),
        filterParams,
    }

    return View(stateProps);
};
