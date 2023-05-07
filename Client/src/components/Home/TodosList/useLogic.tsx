// REACT STUFF
import { useState } from "react";
// APOOLO STUFF
import { useQuery, useMutation } from "@apollo/client"
// GRAPQL STUFF
import { GET_TODOS, UPDATE_TODO, REMOVE_TODO } from "../../../graphql/queries"
// PACKAGES
import Swal from 'sweetalert2';
// TYPES
import { Todo } from "../../../types/todo/todo";
// FUNCTION PROPS TYPE
interface LogicProps {
  setTodoContent: React.Dispatch<React.SetStateAction<string>>,
  setUpdateMode: React.Dispatch<React.SetStateAction<Todo | null>>
}

export function useLogic({ setTodoContent, setUpdateMode }: LogicProps) {
  const [limit, setLimit] = useState<number>(5);

  const { loading, error, data } = useQuery(GET_TODOS, {
    variables: {
      query: {
        limit: limit,
        skip: 0
      }
    }
  });
  const [deleteTodo] = useMutation(REMOVE_TODO)
  const [editTodo] = useMutation(UPDATE_TODO);

  const switchToUpdateMode = (todo: Todo) => {
    setTodoContent(todo.content);
    setUpdateMode(todo)
  }

  const updateTodoStatus = async (id: string, completed: boolean) => {
    await editTodo({
      variables: {
        updateTodoId: id,
        data: {
          isCompleted: completed
        }
      }
    })
  }

  const removeTodo = async (id: string) => {
    const result = await Swal.fire({
      title: 'Delete this Todo item ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Logout',
    });

    if (result.isConfirmed) {
      await deleteTodo({ variables: { removeTodoId: id }, refetchQueries: [GET_TODOS] })
    }
  }

  const showMore = async () => {
    setLimit((prev) => prev += 5)
  }

  return {
    todos: data,
    loading,
    error,
    switchToUpdateMode,
    updateTodoStatus,
    removeTodo,
    showMore
  }
}