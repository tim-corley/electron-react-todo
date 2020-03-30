import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import List from './components/List';
import shortid from 'shortid';
import './styles/app.css';

const App = () => {
  const [todoBase, setTodoBase] = useState([]);
  const [showTodo, setShowTodo] = useState('all');
  const [todoFiltered, setTodoFiltered] = useState([]);
  // const [tasksRemaining, setTasksRemaining] = useState(0);

  useEffect(() => {
    let tempTodos;
    if (showTodo === 'all') {
      tempTodos = todoBase;
      setTodoFiltered(tempTodos);
    } else if (showTodo === 'active') {
      tempTodos = todoBase.filter(todo => !todo.isComplete);
      setTodoFiltered(tempTodos);
    } else if (showTodo === 'complete') {
      tempTodos = todoBase.filter(todo => todo.isComplete);
      setTodoFiltered(tempTodos);
    }
  }, [todoBase, showTodo]);

  const saveNewTodo = text => {
    setTodoBase([
      { id: shortid.generate(), text, isComplete: false },
      ...todoBase
    ]);
  };

  const toggleComplete = id => {
    const todoCopy = [...todoBase];
    todoCopy.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return setTodoBase(todoCopy);
    });
  };

  const deleteItem = id => {
    return setTodoBase(todoBase.filter(todo => todo.id !== id));
  };

  const updateToShow = string => {
    setShowTodo(string);
  };

  return (
    <div className="flex h-screen bg-local img-bg">
      <div className="m-auto h-auto w-11/12 my-8 rounded shadow-lg bg-white opacity-75">
        <>
          <Header saveNewTodo={saveNewTodo} updateToShow={updateToShow} />
          <List
            todos={todoFiltered}
            toggleComplete={toggleComplete}
            deleteItem={deleteItem}
          />
        </>
      </div>
    </div>
  );
};

export default App;
