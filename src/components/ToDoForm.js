import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';

// ADD NEW TODO TO APP STATE VIA INPUT FORM
const ToDoForm = ({ saveNewTodo }) => {
  const [value, setValue] = useState('');

  const resetValue = () => {
    setValue('');
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveNewTodo(value);
        resetValue();
      }}
    >
      <div className="flex items-center border-b border-b-2 border-white">
        <div className="flex w-full px-4">
          <input
            className="appearance-none bg-transparent border-none w-full text-midnightink-headline text-xl placeholder-text-indigo-900 mr-3 leading-tight focus:outline-none"
            name="text"
            onChange={event => {
              setValue(event.target.value);
            }}
            value={value}
            placeholder="add a new task..."
          />
          <button
            type="submit"
            className="w-1/4 px-2 py-4 mb-2 focus:outline-none"
            onClick={event => {
              event.preventDefault();
              saveNewTodo(value);
              resetValue();
            }}
          >
            <IoIosAddCircleOutline className="flex text-5xl m-auto text-midnightink-button" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ToDoForm;
