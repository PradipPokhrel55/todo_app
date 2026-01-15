import { useTodoContext } from "@/context/TodoContext";

export function useTodos() {
  return useTodoContext();
}
