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
    console.log('CLICKED  -->  ' + id);
    // MAKE A COPY
    const updatedToDo = [...todos];
    // CHANGE TO COPY TO DESIRED STATE
    updatedToDo.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
        console.log(updatedToDo);
      } else {
        console.log('No Match');
      }
      return setTodos(updatedToDo);
    });

    // FLIP isComplete to opposite of current for given id

    // setTodos to new (copy & changed) array
  };

  // const toggleComplete = index => {
  //   console.log(index);

  //   const newTodos = [...todos];
  //   console.log(newTodos);

  //   // newTodos[index].isComplete = true;
  //   // setTodos(newTodos);
  // };

  return (
    <div className="flex h-screen bg-local img-bg">
      <div className="m-auto h-auto w-11/12 my-8 rounded shadow-lg bg-minwarm-lightsand opacity-75">
        <>
          <Header saveNewTodo={saveNewTodo} />
          <List todos={todos} toggleComplete={toggleComplete} />
        </>
      </div>
    </div>
  );
};

export default App;
