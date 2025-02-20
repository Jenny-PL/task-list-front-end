import './NewTaskForm.css';
import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const defaultTask = {
  title: '',
  isComplete: false,
  description: '',
};

const NewTaskForm = (props) => {
  const [taskData, setTaskData] = useState(defaultTask);

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newTaskData = { ...taskData };
    newTaskData[name] = value;
    console.log(newTaskData);
    setTaskData(newTaskData);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();

    props.handleSubmission({
      title: taskData.title,
      isComplete: taskData.isComplete,
      description: taskData.description,
    });

    setTaskData({
      title: '',
      isComplete: false,
      description: '',
    });
  };

  return (
    <form onSubmit={handleFormSubmission}>
      <label htmlFor="title">title</label>
      <input
        type="text"
        name="title"
        value={taskData.title}
        onChange={handleFormInput}
      ></input>
      <label htmlFor="isComplete">isComplete</label>
      <input
        type="text"
        name="isComplete"
        value={taskData.isComplete}
        onChange={handleFormInput}
      ></input>
      <label htmlFor="description">description</label>
      <input
        type="text"
        name="description"
        value={taskData.description}
        onChange={handleFormInput}
      ></input>
      <input type="submit" value="Add Task"></input>
    </form>
  );
};

NewTaskForm.propTypes = {
  handleSubmission: PropTypes.func.isRequired,
};

export default NewTaskForm;
