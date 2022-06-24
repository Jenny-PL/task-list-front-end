import React from 'react';
import TaskList from './components/TaskList.js';
import NewTaskForm from './components/NewTaskForm';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const TASKS = [
  // {
  //   id: 1,
  //   title: 'Mow the lawn',
  //   isComplete: false,
  // },
  // {
  //   id: 2,
  //   title: 'Cook Pasta',
  //   isComplete: true,
  // },
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
    // let targetTask;
    const newToggleTasks = [...tasks];
    let targetTask;
    for (let task of newToggleTasks) {
      if (task.id === id) {
        targetTask = task;
      }
    }

    axios
      .patch(
        `https://task-list-api-c17.herokuapp.com/tasks/${targetTask.id}/mark_complete`,
        {
          isComplete: targetTask.isComplete,
        }
      )

      .then((response) => {
        console.log('Updating isComplete');
        targetTask.isComplete = !targetTask.isComplete;
        setTasks(newToggleTasks);
      })
      .catch((error) => {
        console.log("Couldn't update task");
      });
  };

  const deleteTask = (id) => {
    console.log('Inside deleteTasks', id);

    axios
      .delete(`https://task-list-api-c17.herokuapp.com/tasks/${id}`)
      .then((response) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
      })
      .catch((error) => {
        console.log('Unable to delete');
      });
  };

  const makeNewTask = (data) => {
    console.log(data);
    axios
      .post('https://task-list-api-c17.herokuapp.com/tasks', data)
      .then((response) => {
        getTasksFromApi();
      })
      .catch((error) => {
        console.log("Couldn't make a new task.");
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={tasks}
            onClickCallback={onClickCallback}
            deleteTaskCallback={deleteTask}
          />
        </div>
        <NewTaskForm handleSubmission={makeNewTask}></NewTaskForm>
      </main>
    </div>
  );
};

export default App;
