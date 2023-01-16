import './App.css';
import { Toaster } from 'react-hot-toast';
import { TaskList } from './components';

function App() {
  return (
    <div className="App">
      <Toaster />
      <div className="task-container">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
