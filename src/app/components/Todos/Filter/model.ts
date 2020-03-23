export interface IFilterData {
    status: string;
    title: string;
}

export interface IModel {
    onFilterChange: (filter: IFilterData) => void;
}

export interface IActions {
    handleStatusChange: (status: string) => void;
    handleTitleChange: (title: string) => void;
    handleClearAllFilters: () => void;
}

export interface IStateProps extends IModel, IActions {
    filterParams: IFilterData,
}