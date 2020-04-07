import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AddBtn from './components/AddBtn';
import List from './components/List';
import shortid from 'shortid';
import './styles/app.css';

const App = () => {
  const defaultView = {
    activeValue: false,
    completeValue: false,
    allValue: true
  };
  const activeView = {
    activeValue: true,
    completeValue: false,
    allValue: false
  };
  const completeView = {
    activeValue: false,
    completeValue: true,
    allValue: false
  };
  const [todoBase, setTodoBase] = useState([]);
  const [showTodo, setShowTodo] = useState('all');
  const [todoFiltered, setTodoFiltered] = useState([]);
  const [tasksDue, setTasksDue] = useState(0);
  const [switchValues, setSwitchValues] = useState(defaultView);

  useEffect(() => {
    let tempTodos;
    if (showTodo === 'all') {
      tempTodos = todoBase;
      setTodoFiltered(tempTodos);
      setSwitchValues(defaultView);
    } else if (showTodo === 'active') {
      tempTodos = todoBase.filter(todo => !todo.isComplete);
      setTodoFiltered(tempTodos);
      setSwitchValues(activeView);
    } else if (showTodo === 'complete') {
      tempTodos = todoBase.filter(todo => todo.isComplete);
      setTodoFiltered(tempTodos);
      setSwitchValues(completeView);
    }
  }, [todoBase, showTodo]);

  useEffect(() => {
    updateTasksDue();
  });

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

  const updateTasksDue = () => {
    const notCompleteCount = todoBase.filter(todo => !todo.isComplete).length;
    setTasksDue(notCompleteCount);
  };

  return (
    <div className="flex h-screen bg-local img-bg">
      <div className="m-auto h-auto w-11/12 my-8 rounded-lg shadow-lg bg-white">
        <div className="header-container">
          <div className="header-block rounded-t-lg"></div>
          <div className="separator reverse"></div>
          <div className="header-content"></div>
        </div>
        <Header
          saveNewTodo={saveNewTodo}
          updateToShow={updateToShow}
          tasksDue={tasksDue}
          switchValues={switchValues}
        />
        <div className="btn-container">
          <AddBtn />
        </div>
        <div className="bottom-block">
          <div className="list-container">
            <List
              todos={todoFiltered}
              toggleComplete={toggleComplete}
              deleteItem={deleteItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
