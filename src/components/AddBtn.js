import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

const AddBtn = ({ saveNewTodo }) => {
  const [task, setTask] = useState('');
  const resetValue = () => {
    setTask('');
  };
  return (
    <div>
      <button
        type="submit"
        className="w-1/4 px-2 py-4 mb-2 focus:outline-none"
        onClick={event => {
          event.preventDefault();
          saveNewTodo(task);
          resetValue();
        }}
      >
        <IoIosAddCircleOutline className="flex text-5xl m-auto text-minwarm-gray" />
      </button>
    </div>
  );
};

export default AddBtn;
