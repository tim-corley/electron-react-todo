import React, { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import shortid from 'shortid';
import './styles/app.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  const saveNewTodo = text => {
    setTodos([{ id: shortid.generate(), text, isComplete: false }, ...todos]);
  };

  const toggleComplete = id => {
    const todoCopy = [...todos];
    todoCopy.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return setTodos(todoCopy);
    });
  };

  const deleteItem = id => {
    return setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="flex h-screen bg-local img-bg">
      <div className="m-auto h-auto w-11/12 my-8 rounded shadow-lg bg-white opacity-75">
        <>
          <Header saveNewTodo={saveNewTodo} />
          <List
            todos={todos}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
          />
        </>
      </div>
    </div>
  );
};

export default App;
