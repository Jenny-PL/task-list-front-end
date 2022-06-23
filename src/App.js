import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

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

  useEffect(() => {
    getTasksFromApi();
  }, []);

  //helper function
  const getTasksFromApi = () => {
    axios
      .get('https://task-list-api-c17.herokuapp.com/tasks')
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.log('Could not get tasks');
      });
  };

  const onClickCallback = (id) => {
    console.log('Inside SetToggle', id);
    let targetTask;
    const newToggleTasks = [...tasks];
    for (let task of newToggleTasks) {
      if (task.id === id) {
        targetTask = task}
        // targetTask.isComplete = !targetTask.isComplete;
      }
      setTasks(newToggleTasks);
    }
  };

    axios.patch(`https://task-list-api-c17.herokuapp.com/tasks/${targetTask.id}`)
    .then((response) => {
      targetTask.isComplete = !targetTask.isComplete;
      setTasks(newToggleTasks)
    }
    .catch((error) => {
      console.log("Couldn't update task");
    });
    setTasks(newToggleTasks)
  };


  //   let targetTask;
  //   const newToggleTasks = [...tasks];
  //   for (let task of newToggleTasks) {
  //     if (task.id === id) {
  //       targetTask = task}
  //       // targetTask.isComplete = !targetTask.isComplete;
  //     }
  //     setTasks(newToggleTasks);
  //   }
  // };

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
