import React from 'react';

export const Edit = () => {
  return (
    <div className="header-content">
      {/* SHOW ACTIVE ONLY */}
      <h1>ACTIVE TASKS</h1>
      {/* SHOW COMPLETED ONLY */}
      <h1>COMPLETED TASKS</h1>
      {/* SHOW ALL */}
      <h1>ALL TASKS</h1>
    </div>
  );
};

export default Edit;
