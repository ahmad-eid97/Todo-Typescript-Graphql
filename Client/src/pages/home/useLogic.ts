// REACT STUFF
import { useState } from "react";
// TYPES
import { Todo } from "../../types/todo/todo";

export function useLogic() {
  const [todoContent, setTodoContent] = useState<string>('');
  const [updateMode, setUpdateMode] = useState<Todo | null>(null);

  return {
    todoContent,
    setTodoContent,
    updateMode,
    setUpdateMode
  }
}