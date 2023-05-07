// REACT STUFF
import React from 'react';
// COMPONENTS
import { Header, TodosField, TodosList } from '../../components';
// LOGIC
import { useLogic } from './useLogic';
// STYLES
import './home.scss';

const home = () => {
  const { todoContent, setTodoContent, updateMode, setUpdateMode } = useLogic()

  return (
    <div className='home'>
      <div className='wrapper'>
        <Header />
        <h1>Tasks List</h1>
        <TodosField todoContent={todoContent} setTodoContent={setTodoContent} updateMode={updateMode} />
        <TodosList setTodoContent={setTodoContent} setUpdateMode={setUpdateMode} />
      </div>
    </div>
  )
}

export default home
