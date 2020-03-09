import React from 'react';

export default props => (
  <div className="flex p-2 mt-2 shadow-lg rounded border-2 border-midnightink-stroke text-midnightink-headline">
    <div
      style={{
        textDecoration: props.todo.complete ? 'line-through' : ''
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <button onClick={props.onDelete}>x</button>
  </div>
);
