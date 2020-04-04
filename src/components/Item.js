import React from 'react';
import { GoTrashcan } from 'react-icons/go';

// DISPLAY A TODO ROW (ANONYMOUS COMPONENT)
const Item = ({ todo, toggleComplete, deleteItem }) => (
  <div className="relative w-full p-2 mt-2 shadow-lg rounded border-2 border-midnightink-stroke text-black">
    <div
      onClick={() => toggleComplete(todo.id)}
      style={{
        textDecoration: todo.isComplete ? 'line-through' : ''
      }}
    >
      {todo.text}
    </div>
    <div>
      <button
        className="absolute inset-y-0 right-0 p-2"
        onClick={() => deleteItem(todo.id)}
      >
        <GoTrashcan />
      </button>
    </div>
  </div>
);

export default Item;
