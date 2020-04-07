import React, { useState } from 'react';
import Home from './Home';
import Add from './Add';
import Edit from './Edit';
import { FaEllipsisH } from 'react-icons/fa';

// make header it owns component - move this out to a "Nav" component
const Header = ({ saveNewTodo, updateToShow, tasksDue, switchValues }) => {
  const [appMode, setAppMode] = useState('home');
  if (appMode === 'home') {
    return (
      <div className="header-items">
        {/* ELLIPSIS & TOOLTIP MENU */}
        <div className="text-4xl ellipsis">
          <div className="tooltip">
            <div className="tooltipMenu leftSide">
              <ul>
                <li
                  onClick={event => {
                    setAppMode(event.target.innerText.toLowerCase());
                  }}
                >
                  Home
                </li>
                <li
                  onClick={event => {
                    setAppMode(event.target.innerText.toLowerCase());
                  }}
                >
                  Add
                </li>
                <li
                  onClick={event => {
                    setAppMode(event.target.innerText.toLowerCase());
                  }}
                >
                  Edit
                </li>
              </ul>
            </div>
          </div>
          <div>
            <FaEllipsisH />
          </div>
        </div>
        <Home tasksDue={tasksDue} />
      </div>
    );
  } else if (appMode === 'add') {
    return (
      <div className="header-items">
        {/* ELLIPSIS & TOOLTIP MENU */}
        <div className="text-4xl ellipsis">
          <div className="tooltip">
            <div className="tooltipMenu leftSide">
              <ul>
                <li
                  onClick={event => {
                    setAppMode(event.target.innerText.toLowerCase());
                  }}
                >
                  Home
                </li>
                <li
                  onClick={event => {
                    setAppMode(event.target.innerText.toLowerCase());
                  }}
                >
                  Add
                </li>
                <li
                  onClick={event => {
                    setAppMode(event.target.innerText.toLowerCase());
                  }}
                >
                  Edit
                </li>
              </ul>
            </div>
          </div>
          <div>
            <FaEllipsisH />
          </div>
        </div>
        <Add saveNewTodo={saveNewTodo} />
      </div>
    );
  } else if (appMode === 'edit') {
    return (
      <div className="header-items">
        {/* ELLIPSIS & TOOLTIP MENU */}
        <div className="text-4xl ellipsis">
          <div className="tooltip">
            <div className="tooltipMenu leftSide">
              <ul>
                <li
                  onClick={event => {
                    setAppMode(event.target.innerText.toLowerCase());
                  }}
                >
                  Home
                </li>
                <li
                  onClick={event => {
                    setAppMode(event.target.innerText.toLowerCase());
                  }}
                >
                  Add
                </li>
                <li
                  onClick={event => {
                    setAppMode(event.target.innerText.toLowerCase());
                  }}
                >
                  Edit
                </li>
              </ul>
            </div>
          </div>
          <div>
            <FaEllipsisH />
          </div>
        </div>
        <Edit updateToShow={updateToShow} switchValues={switchValues} />
      </div>
    );
  }
};

export default Header;
