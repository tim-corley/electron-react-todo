import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const AddBtn = ({ saveNewTodo }) => {
  const [task, setTask] = useState('');
  const resetValue = () => {
    setTask('');
  };
  return (
    <button
      type="submit"
      className="w-1/4 px-2 py-4 mb-2 focus:outline-none"
      onClick={event => {
        event.preventDefault();
        saveNewTodo(task);
        resetValue();
      }}
    >
      <div className="mdc-fab circle shadow-lg focus:outline-none">
        <span className="text-white text-6xl mdc-fab__icon material-icons">
          add
        </span>
      </div>
    </button>
  );
};

export default AddBtn;
