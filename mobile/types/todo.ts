export type TodoCategory = 'Work' | 'Personal';

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    category: TodoCategory;
}
