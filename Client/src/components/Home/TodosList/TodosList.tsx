// REACT STUFF
import { useContext } from 'react';
// REACT CONTEXTS
import { TodoContext } from '../../../contexts/TodoContext';
// LOGIC
import { useLogic } from './useLogic';
// TYPES
import { Todo } from '../../../types/todo/todo';
// STYLES
import './todosList.scss';

const TodosList = () => {
  const { setTodoContent, setUpdateMode } = useContext(TodoContext)
  const { todos, switchToUpdateMode, updateTodoStatus, removeTodo, showMore } = useLogic({ setTodoContent, setUpdateMode });

  return (
    <div className="todos-list">
      {!todos?.todos?.items.length &&
        <h2>You have no Todos yet!</h2>
      }
      <ul>
        {todos?.todos?.items.map((todo: Todo) => (
          <li key={todo._id} className={todo.isCompleted ? 'completed' : ''}>
            <span></span>
            <span className='content'>{todo.content}</span>
            <div className='actions'>
              {todo.isCompleted ?
                <i className="fa-light fa-xmark" onClick={() => updateTodoStatus(todo._id, !todo.isCompleted)}></i>
                :
                <i className="fa-regular fa-regular fa-check" onClick={() => updateTodoStatus(todo._id, !todo.isCompleted)}></i>
              }
              <i className="fa-regular fa-pen-to-square" onClick={() => switchToUpdateMode(todo)}></i>
              <i className="fa-regular fa-trash" onClick={() => removeTodo(todo._id)}></i>
            </div>
          </li>
        ))}
      </ul>

      {(todos?.todos?.items.length < todos?.todos?.count) &&
        <div className='showMore'>
          <button onClick={showMore}>Show More</button>
        </div>
      }
    </div>
  )
}

export default TodosList
