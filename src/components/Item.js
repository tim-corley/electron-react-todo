import React from 'react';
import { GoTrashcan } from 'react-icons/go';

// DISPLAY A TODO ROW (ANONYMOUS COMPONENT)
const Item = ({ todo, toggleComplete, onDelete }) => (
  <div
    // CALL toggleComplete FUNCTION ON CLICK
    onClick={() => toggleComplete(todo.id)}
    className="relative w-full p-2 mt-2 shadow-lg rounded border-2 border-midnightink-stroke text-midnightink-headline"
  >
    <div
      style={{
        textDecoration: todo.isComplete ? 'line-through' : ''
      }}
    >
      {todo.text}
    </div>
    <button className="absolute inset-y-0 right-0 p-2" onClick={onDelete}>
      <GoTrashcan />
    </button>
  </div>
);

export default Item;
