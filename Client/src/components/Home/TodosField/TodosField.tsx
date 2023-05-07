// LOGIC
import { useLogic } from './useLogic';
// COMPONENTS
import TodosButton from '../TodosButton/TodosButton';
import TodosInput from '../TodosInput/TodosInput';
// TYPES
import { Todo } from '../../../types/todo/todo';
// STYLES FILES
import './todosField.scss';
// COMPONENT PROPS TYPE
type TodoField = {
  todoContent: string,
  setTodoContent: React.Dispatch<React.SetStateAction<string>>
  updateMode: Todo | null
}

const TodosField = ({ todoContent, setTodoContent, updateMode }: TodoField) => {
  const { addTodo, updateTodoContent } = useLogic({ updateMode, todoContent, setTodoContent })

  return (
    <div className='todos-field'>
      <TodosInput todoContent={todoContent} setTodoContent={setTodoContent} />
      <TodosButton
        addTodo={addTodo}
        updateTodoContent={updateTodoContent}
        updateMode={updateMode}
      />
    </div>
  )
}

export default TodosField;
