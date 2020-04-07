import React from 'react';
import Switch from './Switch';

export const Edit = ({ updateToShow, switchValues }) => {
  return (
    <div>
      <div className="flex m-2 p-2">
        <Switch
          switchId={'active-switch'}
          isOn={switchValues.activeValue}
          handleToggle={() => {
            updateToShow('active');
          }}
        />
        <span className="flex-1 ml-3">
          <button
            className="focus:outline-none"
            onClick={() => {
              updateToShow('active');
            }}
          >
            ACTIVE TASKS
          </button>
        </span>
      </div>
      <div className="flex m-2 p-2">
        <Switch
          switchId={'completed-switch'}
          isOn={switchValues.completeValue}
          handleToggle={() => {
            updateToShow('complete');
          }}
        />
        <span className="flex-1 ml-3">
          <button
            className="focus:outline-none"
            onClick={() => {
              updateToShow('complete');
            }}
          >
            COMPLETED TASKS
          </button>
        </span>
      </div>
      <div className="flex m-2 p-2">
        <Switch
          switchId={'all-switch'}
          isOn={switchValues.allValue}
          handleToggle={() => {
            updateToShow('all');
          }}
        />
        <span className="flex-1 ml-3">
          <button
            className="focus:outline-none"
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
