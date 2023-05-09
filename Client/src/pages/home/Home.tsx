// REACT CONTEXTS
import TodoProvider from '../../contexts/TodoContext';
// COMPONENTS
import { Header, TodosField, TodosList } from '../../components';
// STYLES
import './home.scss';

const Home = () => {

  return (
    <div className='home'>
      <div className='wrapper'>
        <TodoProvider>
          <Header />
          <h1>Tasks List</h1>
          <TodosField />
          <TodosList />
        </TodoProvider>
      </div>
    </div>
  )
}

export default Home;
