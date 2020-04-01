import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

// ADD NEW TODO TO APP STATE VIA INPUT FORM
const AddForm = ({ saveNewTodo }) => {
  // COMPONENT LEVEL STATE -->
  const [task, setTask] = useState('');

  const resetValue = () => {
    setTask('');
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveNewTodo(task);
        resetValue();
      }}
    >
      <div className="flex items-center border-b border-b-2 border-white">
        <div className="flex w-full px-4">
          <input
            className="appearance-none bg-transparent border-none w-full text-midnightink-headline text-xl placeholder-text-indigo-900 mr-3 leading-tight focus:outline-none"
            name="text"
            onChange={event => {
              setTask(event.target.value);
            }}
            value={task}
            placeholder="add a new task..."
          />
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
      </div>
    </form>
  );
};

export default AddForm;
