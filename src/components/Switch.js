import React from 'react';

const Switch = ({ isOn, handleToggle, switchId }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={switchId}
        type="checkbox"
      />
      <label
        style={{ background: isOn && '#65ACA8' }}
        className="switch-label"
        htmlFor={switchId}
      >
        <span className="switch-button" />
      </label>
    </>
  );
};

export default Switch;
