import React from 'react';
import Switch from './Switch';

export const Edit = ({ updateToShow, switchValues }) => {
  return (
    <div className="edit-content">
      <div className="p-2">
        <Switch
          switchId={'active-switch'}
          isOn={switchValues.activeValue}
          handleToggle={() => {
            updateToShow('active');
          }}
        />
        <span>
          <button
            onClick={() => {
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
          isOn={switchValues.completeValue}
          handleToggle={() => {
            updateToShow('complete');
          }}
        />
        <span>
          <button
            onClick={() => {
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
          isOn={switchValues.allValue}
          handleToggle={() => {
            updateToShow('all');
          }}
        />
        <span>
          <button
            onClick={() => {
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
