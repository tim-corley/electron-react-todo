import React from 'react';
import { GoTrashcan } from 'react-icons/go';

export default props => (
  <div className="relative w-full p-2 mt-2 shadow-lg rounded border-2 border-midnightink-stroke text-midnightink-headline">
    <div
      style={{
        textDecoration: props.todo.complete ? 'line-through' : ''
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <button className="absolute inset-y-0 right-0 p-2" onClick={props.onDelete}>
      <GoTrashcan />
    </button>
  </div>
);
