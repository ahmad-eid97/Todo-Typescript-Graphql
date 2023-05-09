// REACT STUFF
import React, { createContext, useState } from "react";
// TYPE OF CONTEXT
type ContextValue = {
  todoContent: string
  setTodoContent: React.Dispatch<React.SetStateAction<string>>
  updateMode: Todo | null,
  setUpdateMode: React.Dispatch<React.SetStateAction<Todo | null>>
}
// TYPES
import { Todo } from "../types/todo/todo";

export const TodoContext = createContext<ContextValue>({
  todoContent: '',
  setTodoContent: () => { },
  updateMode: null,
  setUpdateMode: () => { }
});

interface ProviderProps {
  children: React.ReactNode
}

const TodoProvider = ({ children }: ProviderProps) => {
  const [todoContent, setTodoContent] = useState("");
  const [updateMode, setUpdateMode] = useState<Todo | null>(null);

  return (
    <TodoContext.Provider value={{ todoContent, setTodoContent, updateMode, setUpdateMode }}>
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;