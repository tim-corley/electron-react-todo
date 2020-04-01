import React, { useState } from 'react';
import Home from './Home';
import Add from './Add';
import Edit from './Edit';
import AddBtn from './AddBtn';
import { FaEllipsisH } from 'react-icons/fa';

const Header = ({ saveNewTodo, updateToShow, tasksDue }) => {
  const [appMode, setAppMode] = useState('home');
  return (
    <div className="header-container">
      <div className="header-block"></div>
      <div className="separator reverse"></div>
      <div className="header-content">
        {/* ELLIPSIS */}
        <div className="text-4xl ellipsis">
          <div className="tooltip">
            <div className="tooltipMenu leftSide">
              <ul>
                <li>Home</li>
                <li>Add</li>
                <li>Edit</li>
              </ul>
            </div>
          </div>
          <div className="swivel">
            <FaEllipsisH />
          </div>
        </div>
        {/* DEFAULT VIEW */}
        <Home tasksDue={tasksDue} />
        {/* SHOW WHEN ADDING NEW TASK, ADD BTN CLICK */}
        <Add saveNewTodo={saveNewTodo} />
        {/* SHOW WHEN TOGGLING TASKS, ELLIPSIS CLICK */}
        <Edit updateToShow={updateToShow} />
      </div>
    </div>
  );
};

export default Header;
