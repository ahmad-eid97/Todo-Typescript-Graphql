// REACT STUFF
import { useContext } from 'react';
// REACT CONTEXTS
import { TodoContext } from '../../../contexts/TodoContext';
// STYLES
import './todosInput.scss';

const TodosInput = () => {
  const { todoContent, setTodoContent } = useContext(TodoContext);

  return (
    <div className='todos-input'>
      <input type="text" placeholder='Type your todo' value={todoContent} onChange={(e) => setTodoContent(e.target.value)} />
    </div>
  )
}

export default TodosInput
