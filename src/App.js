import React from 'react';

// Another
import './App.css';

// Components
import TaskForm from "./components/taskForm"
import Tasks from './components/renderTask';

function App() {
  return (
    <div>
      <TaskForm/>
      <Tasks />
    </div>
  )
};

export default App;