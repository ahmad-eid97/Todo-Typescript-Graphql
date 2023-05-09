// REACT STUFF
import { useContext } from 'react';
// REACT CONTEXTS
import { TodoContext } from '../../../contexts/TodoContext';
// STYLES
import './todosButton.scss';

// COMPONENT PROPS TYPE
type TodosButton = {
  addTodo: () => void
  updateTodoContent: () => void
}

const TodosButton = ({ addTodo, updateTodoContent }: TodosButton) => {
  const { updateMode } = useContext(TodoContext);

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
