import React, { useState } from 'react';
import Header from './components/Header';
import ToDoForm from './components/Add';
import List from './components/List';
import shortid from 'shortid';
import './styles/app.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex h-screen bg-local img-bg">
      <div className="m-auto h-auto w-11/12 my-8 rounded shadow-lg bg-minwarm-lightsand opacity-75">
        <>
          <Header
            saveNewTodo={text => {
              setTodos([
                { id: shortid.generate(), text, isComplete: false },
                ...todos
              ]);
            }}
          />
          <List todos={todos} />
        </>
      </div>
    </div>
  );
};

export default App;
