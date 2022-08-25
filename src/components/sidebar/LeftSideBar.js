import React, { useState } from 'react';
import logo from '../assets/img/logo.svg';
import { Menu } from '@mui/icons-material';
import menu from '../assets/img/menu.png';
import { CalendarMonth, Forum, Logout, Close } from '@mui/icons-material';
import { auth, logout } from '../../api/auth/functions';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LeftSideBar = (props) => {
  const { sideBarOpened, setSideBarOpened } = props;
  const [user, loading, error] = useAuthState(auth);

  return (
    <div
      className={`xs:flex justify-evenly  transition ease-in-out delay-100  ${
        sideBarOpened
          ? 'w-full xs:w-80 absolute xs:relative'
          : 'w-24 hidden relative'
      } `}
      style={{
        minHeight: '100vh',
        background: '#2A3042',
      }}
    >
      <Close
        className={`absolute right-2 top-2 text-white  ${
          sideBarOpened ? 'xs:hidden block' : 'hidden '
        }`}
        onClick={() => setSideBarOpened(false)}
      />
      <div className="flex flex-col items-center ">
        <img
          src={logo}
          width={!sideBarOpened ? '60px' : '50%'}
          className="p-2"
        />

        <div className="mt-5 w-full flex items-center justify-evenly">
          <ul className="flex flex-col justify-start w-full cursor-pointer p-2">
            <li
              className={` p-2 text-gray-300 hover:bg-primary transition ease-in-out delay-100 rounded-lg hover:text-white w-full flex  items-center ${
                sideBarOpened ? 'justify-start pl-2' : 'justify-center'
              }`}
            >
              <CalendarMonth />
              <span className={`ml-3 text-sm ${!sideBarOpened && 'hidden'}`}>
                Calendar
              </span>
            </li>
            <li
              className={` p-2  text-gray-300 hover:bg-primary transition ease-in-out delay-100 rounded-lg hover:text-white w-full flex  items-center ${
                sideBarOpened ? 'justify-start pl-2' : 'justify-center'
              }`}
            >
              <Forum />
              <span className={`ml-3 text-sm ${!sideBarOpened && 'hidden'}`}>
                Chat
              </span>
            </li>
            <li
              className={` p-2 text-gray-300 hover:bg-primary transition ease-in-out delay-100 rounded-lg hover:text-white w-full flex  items-center ${
                sideBarOpened ? 'justify-start pl-2' : 'justify-center'
              }`}
            >
              <CalendarMonth />
              <span className={`ml-3 text-sm ${!sideBarOpened && 'hidden'}`}>
                Calendar
              </span>
            </li>
            <li
              className={` p-2 text-gray-300 hover:bg-primary transition ease-in-out delay-100 rounded-lg hover:text-white w-full flex  items-center ${
                sideBarOpened ? 'justify-start pl-2' : 'justify-center'
              }`}
            >
              <Forum />
              <span className={`ml-3 text-sm ${!sideBarOpened && 'hidden'}`}>
                Chat
              </span>
            </li>
          </ul>
        </div>
        {user ? (
          <div
            className={`p-2 bg-gray-300  transition ease-in-out delay-100 rounded-lg text-primary flex  items-center ${
              sideBarOpened ? 'justify-start pl-2' : 'justify-center'
            } mx-2 cursor-pointer hover:bg-primary hover:text-gray-300 w-1/2`}
          >
            <div className={` flex xs:justify-center `} onClick={logout}>
              <Logout className />
              {sideBarOpened ? (
                <span className={`text-sm  ml-2  md:text-sm`}>Sign Out</span>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LeftSideBar;
