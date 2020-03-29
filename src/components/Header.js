import React from 'react';
import Home from './Home';
import Add from './Add';
import Edit from './Edit';
import { FaEllipsisH } from 'react-icons/fa';

const Header = ({ saveNewTodo }) => {
  return (
    <>
      <div className="block"></div>
      <div className="separator reverse"></div>
      {/* ELLIPSIS */}
      <div>
        <FaEllipsisH />
      </div>
      {/* DEFAULT VIEW */}
      <Home />
      {/* SHOW WHEN ADDING NEW TASK, ADD BTN CLICK */}
      <Add saveNewTodo={saveNewTodo} />
      {/* SHOW WHEN TOGGLING TASKS, ELLIPSIS CLICK */}
      <Edit />
    </>
  );
};

export default Header;
