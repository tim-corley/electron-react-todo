import React from 'react';
import ToDoForm from './components/ToDoForm';
import './styles/app.css';

const App = () => {
  return (
    <div className="flex h-screen bg-local img-bg">
      <div className="m-auto h-auto w-11/12 my-8 rounded shadow-lg bg-minwarm-lightsand opacity-75">
        <ToDoForm saveTodo={console.warn} />
      </div>
    </div>
  );
};

export default App;
