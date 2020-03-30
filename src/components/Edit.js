import React from 'react';

export const Edit = ({ updateToShow }) => {
  return (
    <div className="edit-content">
      {/* SHOW ACTIVE ONLY */}
      <span>
        <button onClick={() => updateToShow('active')}>ACTIVE TASKS</button>
      </span>
      {/* SHOW COMPLETED ONLY */}
      <span>
        <button onClick={() => updateToShow('complete')}>
          COMPLETED TASKS
        </button>
      </span>
      {/* SHOW ALL */}
      <span>
        <button onClick={() => updateToShow('all')}>ALL TASKS</button>
      </span>
    </div>
  );
};

export default Edit;
