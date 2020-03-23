export interface ITodosState {
    items: ITodo[];
    loading: boolean;
    error: String | any;
}
  
export interface ITodo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}
