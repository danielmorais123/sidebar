import React from 'react';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
const RightSide = (props) => {
  return (
    <div className={` w-full min-h-screen`}>
      <Navbar
        sideBarOpened={props.sideBarOpened}
        setSideBarOpened={props.setSideBarOpened}
      />
      <Dashboard />
    </div>
  );
};

export default RightSide;
