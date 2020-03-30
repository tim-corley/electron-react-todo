import React from 'react';
import Item from './Item';

const List = ({ todos, toggleComplete, deleteItem }) => {
  // const [toShow, settoShow] = useState('all');

  return (
    <div>
      {todos.map(todo => (
        <Item
          key={todo.id}
          todo={todo}
          toggleComplete={() => toggleComplete(todo.id)}
          deleteItem={() => deleteItem(todo.id)}
        />
      ))}
    </div>
  );
};

export default List;
