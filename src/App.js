import React, { Component } from 'react';
import ToDoList from './components/ToDoList';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="flex h-screen bg-midnightink-background">
        <ToDoList />
      </div>
    );
  }
}

export default App;
