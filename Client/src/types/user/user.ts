import { Todo } from "../todo/todo";

export type UserSignupInputs = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string
}

export type UserInputs = {
  email: string;
  password: string;
}

export type User = {
  _id: string
  username: string
  password: string
  email: string
  picture: string
  todos: Todo[]
  _typename: string
}