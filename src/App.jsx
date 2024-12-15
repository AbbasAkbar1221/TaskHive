
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import './index.css';

function App() {
  return (
    <div className="App bg-gray-300  w-full min-h-screen">
      <h1 className="text-3xl font-bold text-center pt-8 mb-6 ">Todo-List</h1>
      <AddTodo/>
      <Todos/>
    </div>
  );
}

export default App;
