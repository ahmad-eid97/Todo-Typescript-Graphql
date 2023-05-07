// TYPES
import { TodoInput } from '../../../types/todo/todo';
// STYLES
import './todosInput.scss';

// COMPONENT PROPS TYPE
type TodosInputProps = {
  todoContent: string;
  setTodoContent: React.Dispatch<React.SetStateAction<string>>
}

const TodosInput = ({ todoContent, setTodoContent }: TodosInputProps) => {
  return (
    <div className='todos-input'>
      <input type="text" placeholder='Type your todo' value={todoContent} onChange={(e) => setTodoContent(e.target.value)} />
    </div>
  )
}

export default TodosInput
