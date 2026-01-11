import { useState } from "react";
import { Todo } from "@/types/todo";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const MAX_TODOS = 7;

  const addTodo = (title: string) => {
    if (todos.length >= MAX_TODOS) return;
    if (!title.trim()) return;

    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        completed: false,
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

  return {
    todos,
    addTodo,
    toggleTodo,
    deleteTodo,
    MAX_TODOS,
  };
}
