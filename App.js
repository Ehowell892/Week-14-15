import logo from './logo.svg';
import './App.css';
import Topbar from './topbar';
import TaskList from './tasklist';

function App() {
  return (
    <div className="App">
      <Topbar />
      <TaskList />
    </div>
  );
}

export default App;
