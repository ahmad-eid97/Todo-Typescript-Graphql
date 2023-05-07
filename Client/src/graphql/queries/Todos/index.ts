// APOLLO STUFF
import { gql } from "@apollo/client"

export const GET_TODOS = gql`
  query Todos($query: TodoQuery) {
    todos(query: $query) {
      count
      items {
        content
        isCompleted
        _id
      }
    }
  }
`

export const AddTodo = gql`
  mutation AddTodo($data: TodoData) {
    addTodo(data: $data) {
      _id
      content
      isCompleted
    }
  }
`

export const REMOVE_TODO = gql`
  mutation RemoveTodo($removeTodoId: ID!) {
    removeTodo(id: $removeTodoId) {
      _id
    }
  }
`

export const UPDATE_TODO = gql`
  mutation UpdateTodo($updateTodoId: ID!, $data: UpdateTodoData) {
    updateTodo(id: $updateTodoId, data: $data) {
      _id
      content
      isCompleted
    }
  }
`