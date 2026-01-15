import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Todo, TodoCategory } from '@/types/todo';

interface TodoContextType {
    todos: Todo[];
    addTodo: (title: string, category: TodoCategory) => void;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    MAX_TODOS: number;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
    const [todos, setTodos] = useState<Todo[]>([]);
    const MAX_TODOS = 7;

    const addTodo = (title: string, category: TodoCategory) => {
        if (todos.length >= MAX_TODOS) return;
        if (!title.trim()) return;

        setTodos(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                title,
                completed: false,
                category,
            },
        ]);
    };

    const toggleTodo = (id: string) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id: string) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    return (
        <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, MAX_TODOS }}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodoContext() {
    const context = useContext(TodoContext);
    if (context === undefined) {
        throw new Error('useTodoContext must be used within a TodoProvider');
    }
    return context;
}
