import React from 'react';

const Home = ({ tasksDue }) => {
  const makeDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('en-US', { month: 'long' });
    const year = today.getFullYear();
    return `${month} ${day}, ${year}`;
  };
  const formatTasksDue = taskDue => {
    let tasksDueText;
    if (tasksDue === 0) {
      tasksDueText = 'No Tasks Due';
    } else if (tasksDue === 1) {
      tasksDueText = '1 Task Due';
    } else {
      tasksDueText = `${tasksDue} Tasks Due`;
    }
    return tasksDueText;
  };
  return (
    <div className="header-items">
      {/* DATE */}
      <div>{makeDate()}</div>
      {/* TASK COUNT */}
      <div>
        <p>{formatTasksDue()}</p>
      </div>
      {/* TITLE */}
      <h1>TODAY'S TASKS</h1>
    </div>
  );
};

export default Home;
