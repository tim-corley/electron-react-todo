import React, { useState } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import shortid from 'shortid';

const ToDoForm = ({ saveTodo }) => {
  const [value, setValue] = useState('');

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveTodo(value);
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
            placeholder="add a new todo..."
          />
          <button
            className="w-1/4 px-2 py-4 mb-2 focus:outline-none"
            onClick={event => {
              console.log(event.target);
            }}
          >
            <IoIosAddCircleOutline className="flex text-3xl m-auto text-midnightink-button" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ToDoForm;
