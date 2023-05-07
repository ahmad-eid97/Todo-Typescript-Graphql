// REACT STUFF
import { useLoaderData } from "react-router-dom";
// LOGIC
import { AddTodo } from "../../../graphql/queries";
// APOLLO STUFF
import { useMutation } from "@apollo/client";
import { GET_TODOS, UPDATE_TODO } from "../../../graphql/queries";
// VALIDATION
import TodoValidation from "./validation";
// REACT TOAST
import { successToast, errorToast } from "../../../utils/toast";
// TYPES
import { User } from "../../../types/user/user";
import { Todo } from "../../../types/todo/todo";
// FUNCTION PROPS TYPE
interface LogicProps {
  updateMode: Todo | null
  todoContent: string
  setTodoContent: React.Dispatch<React.SetStateAction<string>>
}

export function useLogic({ updateMode, todoContent, setTodoContent }: LogicProps) {
  const userData = useLoaderData() as User;
  const [addNewTodo] = useMutation(AddTodo, {
    refetchQueries: [GET_TODOS]
  });
  const [editTodo] = useMutation(UPDATE_TODO);

  const checkValidity = () => {
    const check = TodoValidation.safeParse({ content: todoContent });
    if (!check.success) {
      check.error.issues.forEach(err => {
        return errorToast(err.message)
      })
      return false;
    }
    return true
  }

  const addTodo = async () => {
    const check = checkValidity()
    if (!check) return;

    try {
      await addNewTodo({ variables: { data: { content: todoContent, user: userData._id } } })
      setTodoContent('')
      successToast('Todo item added successfully')
    } catch (err: any) {
      errorToast(err.message)
    }
  }

  const updateTodoContent = async () => {
    const check = checkValidity()
    if (!check) return;

    await editTodo({
      variables: {
        updateTodoId: updateMode?._id,
        data: { content: todoContent }
      }
    })
    setTodoContent('')
    successToast('Todo item updated successfully')
  }

  return {
    addTodo,
    updateTodoContent
  }
}