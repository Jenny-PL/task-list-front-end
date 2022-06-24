import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

const Task = ({
  id,
  title,
  isComplete,
  onClickCallback,
  deleteTaskCallback,
  description,
}) => {
  // const [complete, setComplete] = useState(isComplete);
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  return (
    <li className="tasks__item">
      {/* <button onClick={() => props.setDogAgeCallback(props.id)}>🐶</button> */}
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => onClickCallback(id)}
      >
        {title}
      </button>
      {/* added descprtion */}
      <p>{description}</p>
      <button
        className="tasks__item__remove button"
        data-testid={`delete button ${id}`}
        onClick={() => deleteTaskCallback(id)}
      >
        Delete
      </button>
    </li>
  );
};

Task.propTypes = {
  // added description:
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  deleteTaskCallback: PropTypes.func.isRequired,
};

export default Task;
