import React from 'react';
import Item from './Item';

const List = ({ todos, toggleComplete }) => {
  // const [toShow, settoShow] = useState('all');

  return (
    <div>
      {todos.map(todo => (
        <Item key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
