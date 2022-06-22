import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);

  const onClickCallback = (id) => {
    console.log('Inside SetToggle', id);

    const newToggleTasks = [...tasks];
    for (let task of newToggleTasks) {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
      }
      setTasks(newToggleTasks);
    }
  };

  const deleteTask = (id) => {
    console.log('Inside deleteTasks', id);

    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);

    // const newCats = cats.filter((cat) => cat.id !== id);
    // setCats(newCats);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {
            <TaskList
              tasks={tasks}
              onClickCallback={onClickCallback}
              deleteTaskCallback={deleteTask}
            />
          }
        </div>
      </main>
    </div>
  );
};

export default App;
