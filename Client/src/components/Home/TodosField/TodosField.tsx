// REACT STUFF
import { useContext } from 'react';
// REACT CONTEXTS
import { TodoContext } from '../../../contexts/TodoContext';
// LOGIC
import { useLogic } from './useLogic';
// COMPONENTS
import TodosButton from '../TodosButton/TodosButton';
import TodosInput from '../TodosInput/TodosInput';
// STYLES FILES
import './todosField.scss';

const TodosField = () => {
  const { todoContent, setTodoContent, updateMode, setUpdateMode } = useContext(TodoContext)
  const { addTodo, updateTodoContent } = useLogic({ updateMode, setUpdateMode, todoContent, setTodoContent })

  return (
    <div className='todos-field'>
      <TodosInput />
      <TodosButton
        addTodo={addTodo}
        updateTodoContent={updateTodoContent}
      />
    </div>
  )
}

export default TodosField;
