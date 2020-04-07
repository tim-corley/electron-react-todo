import React, { useState } from 'react';
import Switch from './Switch';

export const Edit = ({ updateToShow }) => {
  const [activeValue, setActiveValue] = useState(false);
  const [completeValue, setCompleteValue] = useState(false);
  const [allValue, setAllValue] = useState(true);
  return (
    <div className="edit-content">
      <div className="p-2">
        <Switch
          switchId={'active-switch'}
          isOn={activeValue}
          handleToggle={() => setActiveValue(!activeValue)}
          onClick={() => updateToShow('active')}
        />
        <span>
          <button
            onClick={() => {
              setActiveValue(!activeValue);
              updateToShow('active');
            }}
          >
            ACTIVE TASKS
          </button>
        </span>
      </div>
      <div className="p-2">
        <Switch
          switchId={'completed-switch'}
          isOn={completeValue}
          handleToggle={() => setCompleteValue(!completeValue)}
          onClick={() => updateToShow('complete')}
        />
        <span>
          <button
            onClick={() => {
              setCompleteValue(!completeValue);
              updateToShow('complete');
            }}
          >
            COMPLETED TASKS
          </button>
        </span>
      </div>
      <div className="p-2">
        <Switch
          switchId={'all-switch'}
          isOn={allValue}
          handleToggle={() => setAllValue(!allValue)}
          onClick={() => updateToShow('all')}
        />
        <span>
          <button
            onClick={() => {
              setAllValue(!allValue);
              updateToShow('all');
            }}
          >
            ALL TASKS
          </button>
        </span>
      </div>
    </div>
  );
};

export default Edit;
