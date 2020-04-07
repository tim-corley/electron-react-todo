import React from 'react';
import { GoTrashcan } from 'react-icons/go';

// DISPLAY A TODO ROW (ANONYMOUS COMPONENT)
const Item = ({ todo, toggleComplete, deleteItem }) => (
  <div className="mx-5">
    <button className="inline-block" onClick={() => deleteItem(todo.id)}>
      <GoTrashcan />
    </button>
    <div className="inline-block w-4/5 p-3 m-3 ml-6 shadow-lg rounded text-black">
      <div
        onClick={() => toggleComplete(todo.id)}
        style={{
          textDecoration: todo.isComplete ? 'line-through' : ''
        }}
      >
        {todo.text}
      </div>
    </div>
  </div>
);

export default Item;
