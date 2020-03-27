import React from 'react';

export const Home = () => {
  const makeDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('en-US', { month: 'long' });
    const year = today.getFullYear();
    return `${month} ${day}, ${year}`;
  };
  return (
    <div className="header-content">
      {/* DATE */}
      <div>{makeDate()}</div>
      {/* TASK COUNT */}
      <div>
        <p>No Tasks Due</p>
      </div>
      {/* TITLE */}
      <h1>TODAY'S TASKS</h1>
    </div>
  );
};

export default Home;
