import { User } from "../user/user";

export type TodoInput = {
  content: string;
  isCompleted: boolean;
}

export type Todo = {
  _id: string;
  author: User;
  content: string;
  isCompleted: boolean
}