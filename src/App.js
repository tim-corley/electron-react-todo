import React, { Component } from 'react';
import MainCard from './components/MainCard';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <div className="flex h-screen bg-local img-bg">
        <MainCard />
      </div>
    );
  }
}

export default App;
