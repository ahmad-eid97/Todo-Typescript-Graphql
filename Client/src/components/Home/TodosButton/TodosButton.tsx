// REACT STUFF
import React from 'react';
// TYPES
import { Todo } from '../../../types/todo/todo';
// STYLES
import './todosButton.scss';

// COMPONENT PROPS TYPE
type TodosButton = {
  addTodo: () => void,
  updateTodoContent: () => void,
  updateMode: Todo | null
}

const TodosButton = ({ addTodo, updateTodoContent, updateMode }: TodosButton) => {
  return (
    <div className='todos-button'>
      {updateMode ?
        <button onClick={updateTodoContent}>
          <i className="fa-regular fa-pen-to-square"></i>
          <span>Edit Todo</span>
        </button>
        :
        <button onClick={addTodo}>
          <i className="fa-sharp fa-regular fa-plus"></i>
          <span>Add Todo</span>
        </button>
      }
    </div>
  )
}

export default TodosButton
