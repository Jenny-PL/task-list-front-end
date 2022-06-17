import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete }) => {
  // const [complete, setComplete] = useState(isComplete);
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      {/* <button onClick={() => props.setDogAgeCallback(props.id)}>🐶</button> */}
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => id.setToggleCallback(id)}
      >
        {title}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  setToggleCallback: PropTypes.func.isRequired,
};

export default Task;
